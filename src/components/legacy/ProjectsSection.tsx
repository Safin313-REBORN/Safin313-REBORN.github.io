import React, { useState, useEffect, useRef } from 'react';
import { SELECTED_PROJECTS } from '../../data/portfolioData';
import { SpotlightCard } from '../common/SpotlightCard';
import { GithubIcon } from '../common/SocialIcons';
import {
  Play,
  RotateCcw,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Loader2,
  Copy,
  Check,
  ExternalLink,
  ArrowRight,
  Cpu,
  Terminal,
  ShieldAlert,
  Wrench,
} from 'lucide-react';

interface ProjectsSectionProps {
  onSelectDetail: (detailId: string) => void;
}

type StageStatus = 'Waiting' | 'Executing' | 'Completed' | 'Blocked';

interface SimulatorStage {
  id: number;
  name: string;
  subtext: string;
  resource: string;
  details: string;
}

const SIMULATOR_STAGES: SimulatorStage[] = [
  {
    id: 1,
    name: 'Memory Alloc & Heap Setup',
    subtext: 'Kernel Space Init',
    resource: 'Buffer [1024 KB]',
    details: 'Allocates deterministic static heap for sensor telemetry using zero-leak boundary validation.',
  },
  {
    id: 2,
    name: 'Acquire Mutex A (I2C Sensor Bus)',
    subtext: 'Core 0 Lock Acquisition',
    resource: 'Mutex_I2C_Bus',
    details: 'Thread 0 locks the hardware I2C bus to poll raw SpO2 and photoplethysmography heart rate pulses.',
  },
  {
    id: 3,
    name: 'Acquire Mutex B (Telemetry Pipeline)',
    subtext: 'Core 1 Lock Acquisition',
    resource: 'Mutex_Telemetry_Queue',
    details: 'Thread 1 attempts to lock the transmission queue to prepare data payloads for edge inference.',
  },
  {
    id: 4,
    name: 'ML Feature Extraction & Inference',
    subtext: 'SleepGuard Hybrid Model',
    resource: 'Ensemble Engine',
    details: 'Classifies patient apnea severity into Normal, Warning, or Critical via soft-voting ensemble.',
  },
  {
    id: 5,
    name: 'Release Mutexes & Flash Persistence',
    subtext: 'Deterministic Teardown',
    resource: 'Clean State',
    details: 'Atomically releases all mutex locks in strict inverse order, persisting telemetry without leaks.',
  },
];

const C_ENGINE_CODE = `/*
 * ============================================================================
 * SAHARIA HASSAN SAFIN — SYSTEMS & CONCURRENCY ENGINE
 * Real-Time Sensor Telemetry, Mutex Locking & Deadlock Prevention
 * Target: Embedded POSIX / ESP32 FreeRTOS Microcontroller Architecture
 * ============================================================================
 */

#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <unistd.h>
#include <stdbool.h>

#define TELEMETRY_BUFFER_SIZE 1024
#define INFERENCE_SAMPLES     4

// Hardware Mutex Semaphores
pthread_mutex_t mutex_i2c_bus        = PTHREAD_MUTEX_INITIALIZER;
pthread_mutex_t mutex_telemetry_queue = PTHREAD_MUTEX_INITIALIZER;

typedef struct {
    unsigned int patient_id;
    float spo2_percentage;
    unsigned int bpm_heart_rate;
    int risk_classification; // 0: Normal, 1: Warning, 2: Critical
} BiomedicalPacket;

// Deadlock-Free Hierarchical Lock Acquisition Routine
int execute_telemetry_pipeline(BiomedicalPacket* packet) {
    if (!packet) return -1;

    // STAGE 1: Heap & Struct Validation
    printf("[STAGE 1] Validating telemetry struct at memory address %p\\n", (void*)packet);

    // STAGE 2: Acquire Mutex A (I2C Bus)
    pthread_mutex_lock(&mutex_i2c_bus);
    printf("[STAGE 2] Locked mutex_i2c_bus (Sensor polling active)\\n");

    // STAGE 3: Acquire Mutex B (Hierarchical order prevents circular wait)
    pthread_mutex_lock(&mutex_telemetry_queue);
    printf("[STAGE 3] Locked mutex_telemetry_queue (Queue buffer secured)\\n");

    // STAGE 4: Soft-Voting Inference Simulation (iCONEECT 2026 Model)
    if (packet->spo2_percentage < 90.0f || packet->bpm_heart_rate > 110) {
        packet->risk_classification = 2; // Critical Apnea State
    } else {
        packet->risk_classification = 0; // Normal Resting State
    }
    printf("[STAGE 4] ML Soft-Voting Inference finished. Risk state: %d\\n", packet->risk_classification);

    // STAGE 5: Deterministic Teardown in Strict Inverse Order
    pthread_mutex_unlock(&mutex_telemetry_queue);
    pthread_mutex_unlock(&mutex_i2c_bus);
    printf("[STAGE 5] Released all mutex locks. Zero memory leaks.\\n");

    return 0; // Success
}`;

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectDetail }) => {
  const [activeView, setActiveView] = useState<'simulator' | 'code'>('simulator');

  // Simulator State Machine
  const [currentStageIndex, setCurrentStageIndex] = useState<number>(0);
  const [stageStatuses, setStageStatuses] = useState<StageStatus[]>([
    'Waiting',
    'Waiting',
    'Waiting',
    'Waiting',
    'Waiting',
  ]);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isDeadlocked, setIsDeadlocked] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string>(
    'Engine Ready. Select "Run Sequential Simulation" or test the interactive Deadlock Failure Case.'
  );
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  // Timer Safety: track all setTimeout IDs in a useRef array
  const timerIdsRef = useRef<number[]>([]);

  const clearAllTimers = () => {
    timerIdsRef.current.forEach((id) => clearTimeout(id));
    timerIdsRef.current = [];
  };

  useEffect(() => {
    return () => {
      // Memory leak prevention on unmount
      clearAllTimers();
    };
  }, []);

  const handleReset = () => {
    clearAllTimers();
    setIsRunning(false);
    setIsDeadlocked(false);
    setCurrentStageIndex(0);
    setStageStatuses(['Waiting', 'Waiting', 'Waiting', 'Waiting', 'Waiting']);
    setStatusMessage('Engine reset to baseline. Ready for execution.');
  };

  const runSequential = () => {
    handleReset();
    setIsRunning(true);
    setStatusMessage('Executing Stage 1: Initializing memory and hardware registers...');

    // Stage 1
    const t1 = window.setTimeout(() => {
      setCurrentStageIndex(0);
      setStageStatuses(['Executing', 'Waiting', 'Waiting', 'Waiting', 'Waiting']);
      setStatusMessage('Stage 1 Active: Buffer allocated. Requesting Mutex A...');
    }, 200);

    // Stage 2
    const t2 = window.setTimeout(() => {
      setCurrentStageIndex(1);
      setStageStatuses(['Completed', 'Executing', 'Waiting', 'Waiting', 'Waiting']);
      setStatusMessage('Stage 2 Active: Locked Mutex A (I2C Bus). Polling biomedical signals...');
    }, 1300);

    // Stage 3
    const t3 = window.setTimeout(() => {
      setCurrentStageIndex(2);
      setStageStatuses(['Completed', 'Completed', 'Executing', 'Waiting', 'Waiting']);
      setStatusMessage('Stage 3 Active: Locked Mutex B (Telemetry Queue). Data packets synchronized...');
    }, 2500);

    // Stage 4
    const t4 = window.setTimeout(() => {
      setCurrentStageIndex(3);
      setStageStatuses(['Completed', 'Completed', 'Completed', 'Executing', 'Waiting']);
      setStatusMessage('Stage 4 Active: Running SleepGuard Soft-Voting ML inference (98.95% accuracy)...');
    }, 3800);

    // Stage 5
    const t5 = window.setTimeout(() => {
      setCurrentStageIndex(4);
      setStageStatuses(['Completed', 'Completed', 'Completed', 'Completed', 'Executing']);
      setStatusMessage('Stage 5 Active: Releasing Mutexes in inverse order. Persisting records...');
    }, 5000);

    // Complete
    const t6 = window.setTimeout(() => {
      setStageStatuses(['Completed', 'Completed', 'Completed', 'Completed', 'Completed']);
      setIsRunning(false);
      setStatusMessage('Simulation Completed Successfully. All resources freed with 0.0% memory leaks.');
    }, 6200);

    timerIdsRef.current = [t1, t2, t3, t4, t5, t6];
  };

  const handleStepForward = () => {
    if (isRunning) return;
    if (isDeadlocked) {
      handleReset();
      return;
    }

    if (currentStageIndex >= 4 && stageStatuses[4] === 'Completed') {
      handleReset();
      return;
    }

    const nextIndex = stageStatuses[currentStageIndex] === 'Completed' ? currentStageIndex + 1 : currentStageIndex;
    if (nextIndex > 4) {
      handleReset();
      return;
    }

    setCurrentStageIndex(nextIndex);
    const newStatuses = [...stageStatuses];
    newStatuses[nextIndex] = 'Completed';
    setStageStatuses(newStatuses);
    setStatusMessage(`Step Completed: ${SIMULATOR_STAGES[nextIndex].name} finished.`);
  };

  const triggerDeadlockFailure = () => {
    clearAllTimers();
    setIsRunning(false);
    setIsDeadlocked(true);

    // In a deadlock, Stage 2 has Mutex A and waits for B, while Stage 3 has Mutex B and waits for A
    setStageStatuses(['Completed', 'Blocked', 'Blocked', 'Waiting', 'Waiting']);
    setCurrentStageIndex(2);
    setStatusMessage(
      'CRITICAL CONCURRENCY TRAP: Circular Wait Deadlock detected between Core 0 and Core 1!'
    );
  };

  const resolveDeadlockHierarchical = () => {
    setIsDeadlocked(false);
    setIsRunning(true);
    setStatusMessage('Applying Hierarchical Total Lock Ordering: Acquiring Mutex A -> Mutex B sequentially...');

    const t1 = window.setTimeout(() => {
      setStageStatuses(['Completed', 'Completed', 'Executing', 'Waiting', 'Waiting']);
      setStatusMessage('Deadlock Broken! Core 0 freed Mutex A; Core 1 completes transmission.');
    }, 1000);

    const t2 = window.setTimeout(() => {
      setStageStatuses(['Completed', 'Completed', 'Completed', 'Completed', 'Completed']);
      setIsRunning(false);
      setStatusMessage('Pipeline Auto-Recovered & Completed with 0% memory leaks.');
    }, 2400);

    timerIdsRef.current = [t1, t2];
  };

  const copyCodeToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(C_ENGINE_CODE);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2500);
    } catch {
      setCopiedCode(false);
    }
  };

  const renderStatusIcon = (status: StageStatus) => {
    switch (status) {
      case 'Completed':
        return <CheckCircle2 className="h-5 w-5 text-emerald-400" />;
      case 'Executing':
        return <Loader2 className="h-5 w-5 text-gold animate-spin" />;
      case 'Blocked':
        return <AlertTriangle className="h-5 w-5 text-rose-500 animate-pulse" />;
      case 'Waiting':
      default:
        return <Clock className="h-5 w-5 text-cream/30" />;
    }
  };

  return (
    <div id="simulator" className="mx-auto max-w-7xl px-6 md:px-12 py-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8 mb-16">
        <div>
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-cream/50 mb-2">
            <span className="text-gold">05</span>
            <span>/</span>
            <span>Flagship Engine</span>
          </div>
          <h2 className="font-forum text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Selected Work & Interactive Simulator
          </h2>
        </div>
        <p className="font-sans text-sm text-cream/60 max-w-md font-light leading-relaxed">
          Explore production web deployments, embedded hardware systems, and an interactive real-time concurrency simulator.
        </p>
      </div>

      {/* Simulator Dual-View Container */}
      <div className="rounded-3xl border border-white/15 bg-white/[0.02] p-6 sm:p-8 md:p-10 backdrop-blur-2xl shadow-2xl mb-24 relative overflow-hidden">
        {/* Top Control Bar with Mode Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="h-2 w-2 rounded-full bg-gold animate-ping" />
              <span className="font-mono text-xs uppercase tracking-wider text-gold font-medium">
                Real-Time Systems & Concurrency Simulator
              </span>
            </div>
            <h3 className="font-forum text-2xl sm:text-3xl text-white">
              Process Synchronization & Deadlock Demonstration
            </h3>
          </div>

          {/* Dual-View Switcher Tabs */}
          <div className="inline-flex rounded-full border border-white/15 bg-black/60 p-1.5 backdrop-blur-md">
            <button
              type="button"
              onClick={() => setActiveView('simulator')}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-mono transition-all duration-300 ${
                activeView === 'simulator'
                  ? 'bg-white/15 text-white font-medium border border-white/20 shadow-md'
                  : 'text-cream/60 hover:text-white'
              }`}
            >
              <Cpu className="h-3.5 w-3.5" />
              <span>Visual Flow Simulator</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveView('code')}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-mono transition-all duration-300 ${
                activeView === 'code'
                  ? 'bg-white/15 text-white font-medium border border-white/20 shadow-md'
                  : 'text-cream/60 hover:text-white'
              }`}
            >
              <Terminal className="h-3.5 w-3.5" />
              <span>C Engine & Algorithmic Code</span>
            </button>
          </div>
        </div>

        {/* VIEW 1: Visual Story Mode */}
        {activeView === 'simulator' ? (
          <div>
            {/* Dynamic Status Banner */}
            <div
              className={`rounded-2xl border px-6 py-4 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all duration-300 ${
                isDeadlocked
                  ? 'border-rose-500/50 bg-rose-950/30 text-rose-200'
                  : isRunning
                  ? 'border-gold/40 bg-gold/10 text-cream'
                  : stageStatuses[4] === 'Completed'
                  ? 'border-emerald-500/40 bg-emerald-950/20 text-emerald-200'
                  : 'border-white/10 bg-white/[0.02] text-cream/80'
              }`}
            >
              <div className="flex items-center gap-3">
                {isDeadlocked ? (
                  <ShieldAlert className="h-6 w-6 text-rose-400 shrink-0" />
                ) : isRunning ? (
                  <Loader2 className="h-6 w-6 text-gold animate-spin shrink-0" />
                ) : (
                  <CheckCircle2 className="h-6 w-6 text-emerald-400 shrink-0" />
                )}
                <div>
                  <div className="font-mono text-xs font-bold uppercase tracking-wider opacity-75">
                    {isDeadlocked
                      ? 'Failure-Case Trap Active'
                      : isRunning
                      ? 'Process Pipeline Running'
                      : 'Telemetry Status'}
                  </div>
                  <div className="font-sans text-sm font-medium mt-0.5">{statusMessage}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={runSequential}
                  disabled={isRunning}
                  className="neumorphic-btn inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-medium text-white disabled:opacity-50"
                >
                  <Play className="h-3.5 w-3.5 text-gold" />
                  <span>Run Sequential Simulation</span>
                </button>

                <button
                  type="button"
                  onClick={handleStepForward}
                  disabled={isRunning}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-mono text-cream/80 hover:bg-white/15 hover:text-white transition-all disabled:opacity-50"
                >
                  Step Forward
                </button>

                <button
                  type="button"
                  onClick={triggerDeadlockFailure}
                  disabled={isRunning}
                  className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/40 bg-rose-500/10 px-4 py-2.5 text-xs font-mono text-rose-300 hover:bg-rose-500/20 transition-all disabled:opacity-50"
                >
                  <AlertTriangle className="h-3.5 w-3.5" />
                  <span>What is a Deadlock?</span>
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  aria-label="Reset simulation"
                  className="rounded-full border border-white/15 bg-white/5 p-2.5 text-cream/70 hover:text-white hover:bg-white/15 transition-all"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* 5 Sequential Stage Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
              {SIMULATOR_STAGES.map((stage, idx) => {
                const status = stageStatuses[idx];

                return (
                  <div
                    key={stage.id}
                    className={`relative rounded-2xl border p-5 transition-all duration-300 flex flex-col justify-between min-h-[220px] ${
                      status === 'Completed'
                        ? 'border-emerald-500/30 bg-emerald-950/15'
                        : status === 'Blocked'
                        ? 'border-rose-500/60 bg-rose-950/30 ring-1 ring-rose-500/50'
                        : status === 'Executing'
                        ? 'border-gold/60 bg-gold/10 shadow-lg shadow-gold/5'
                        : 'border-white/10 bg-white/[0.015]'
                    }`}
                  >
                    <div>
                      {/* Top status & index */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-[11px] font-bold text-cream/40">
                          STAGE 0{stage.id}
                        </span>
                        <div>{renderStatusIcon(status)}</div>
                      </div>

                      <div className="font-mono text-[10px] text-gold/80 uppercase tracking-wider mb-1">
                        {stage.subtext}
                      </div>
                      <h4 className="font-forum text-lg text-white font-medium leading-snug mb-2">
                        {stage.name}
                      </h4>
                      <p className="font-sans text-xs text-cream/60 leading-relaxed font-light">
                        {stage.details}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-cream/50">
                      <span>Resource:</span>
                      <span className="text-cream/80 truncate max-w-[120px]">{stage.resource}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Deadlock Educational Inset if Deadlocked */}
            {isDeadlocked && (
              <div className="rounded-2xl border border-rose-500/40 bg-black/80 p-6 md:p-8 backdrop-blur-xl animate-in fade-in duration-300">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-rose-500/40 bg-rose-500/20 text-rose-300">
                      <ShieldAlert className="h-5 w-5" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-forum text-xl sm:text-2xl text-white">
                        Anatomy of a Deadlock & Coffman Conditions
                      </h4>
                      <p className="font-sans text-sm text-cream/80 leading-relaxed font-light">
                        A <strong>deadlock</strong> occurs when a set of concurrent processes are blocked because each process holds a resource and waits for another resource held by another process in the same set. Here, Core 0 holds <code className="text-gold">Mutex A</code> and waits for <code className="text-gold">Mutex B</code>, while Core 1 holds <code className="text-gold">Mutex B</code> and waits for <code className="text-gold">Mutex A</code>.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2">
                        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                          <div className="font-mono text-xs font-semibold text-rose-300">1. Mutual Exclusion</div>
                          <div className="text-[11px] text-cream/60 mt-1">Resource cannot be shared concurrently.</div>
                        </div>
                        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                          <div className="font-mono text-xs font-semibold text-rose-300">2. Hold & Wait</div>
                          <div className="text-[11px] text-cream/60 mt-1">Holding resource while requesting others.</div>
                        </div>
                        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                          <div className="font-mono text-xs font-semibold text-rose-300">3. No Preemption</div>
                          <div className="text-[11px] text-cream/60 mt-1">Resource only released voluntarily.</div>
                        </div>
                        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                          <div className="font-mono text-xs font-semibold text-gold">4. Resolution: Hierarchy</div>
                          <div className="text-[11px] text-cream/60 mt-1">Total Lock Ordering breaks cycle.</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Auto-Recover Action Button */}
                  <div className="shrink-0 flex flex-col items-start md:items-end">
                    <button
                      type="button"
                      onClick={resolveDeadlockHierarchical}
                      className="neumorphic-btn inline-flex items-center gap-2 rounded-full px-5 py-3 text-xs font-medium text-white shadow-neumorphic border-gold/40"
                    >
                      <Wrench className="h-4 w-4 text-gold" />
                      <span>Resolve via Lock Hierarchy</span>
                    </button>
                    <span className="font-mono text-[10px] text-cream/50 mt-1.5">
                      Auto-breaks circular wait
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* VIEW 2: Code & Engine Mode */
          <div className="space-y-6">
            {/* Algorithmic Complexity Metrics Header */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-center">
                <span className="font-mono text-xs uppercase tracking-wider text-cream/50 block">Time Complexity</span>
                <span className="font-mono text-xl font-bold text-white mt-1 block">O(1) Lock / O(N) Poll</span>
                <span className="font-mono text-[10px] text-cream/40">Atomic Test-and-Set</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-center">
                <span className="font-mono text-xs uppercase tracking-wider text-cream/50 block">Space Complexity</span>
                <span className="font-mono text-xl font-bold text-white mt-1 block">O(1) Static Heap</span>
                <span className="font-mono text-[10px] text-cream/40">Zero-Leak Bounds</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-center">
                <span className="font-mono text-xs uppercase tracking-wider text-cream/50 block">Concurrency Model</span>
                <span className="font-mono text-xl font-bold text-gold mt-1 block">POSIX / FreeRTOS</span>
                <span className="font-mono text-[10px] text-cream/40">Mutex Semaphores</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-center">
                <span className="font-mono text-xs uppercase tracking-wider text-cream/50 block">Deadlock Strategy</span>
                <span className="font-mono text-xl font-bold text-emerald-400 mt-1 block">Lock Ordering</span>
                <span className="font-mono text-[10px] text-cream/40">Prevents Circular Wait</span>
              </div>
            </div>

            {/* Terminal Window with Syntax Styling & Copy */}
            <div className="relative rounded-2xl border border-white/15 bg-black/90 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-3 text-xs text-cream/50 font-mono">
                    engine_synchronization.c — ANSI C99 / POSIX
                  </span>
                </div>

                <button
                  type="button"
                  onClick={copyCodeToClipboard}
                  className="flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-cream hover:bg-white/15 hover:text-white transition-all"
                >
                  {copiedCode ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy Engine Code</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code display with syntax highlights */}
              <pre className="p-6 overflow-x-auto text-cream/90 leading-relaxed font-mono max-h-[460px] overflow-y-auto">
                <code>{C_ENGINE_CODE}</code>
              </pre>
            </div>
          </div>
        )}
      </div>

      {/* Selected Candidate Projects Grid */}
      <div>
        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-cream/50 block">
              Curated Implementations
            </span>
            <h3 className="font-forum text-2xl sm:text-3xl text-white mt-1">
              Selected Engineering Works
            </h3>
          </div>
          <span className="hidden sm:inline-block font-mono text-xs text-cream/40">
            Click any card to open full dossier
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SELECTED_PROJECTS.map((proj) => (
            <SpotlightCard
              key={proj.id}
              onClick={() => onSelectDetail(proj.detailId)}
              className="p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-gold">
                    {proj.category}
                  </span>
                  <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 font-mono text-[11px] text-gold font-medium">
                    {proj.badge}
                  </span>
                </div>

                <h4 className="font-forum text-2xl sm:text-3xl text-white tracking-wide mb-1">
                  {proj.title}
                </h4>
                <p className="font-sans text-xs sm:text-sm text-cream/60 mb-4 font-light">
                  {proj.subtitle}
                </p>
                <p className="font-sans text-sm text-cream/80 leading-relaxed font-light mb-6">
                  {proj.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-cream/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Stats Matrix */}
                <div className="grid grid-cols-2 gap-3 border-t border-white/10 pt-4 mb-6">
                  {proj.stats.map((stat, idx) => (
                    <div key={idx} className="rounded-xl bg-white/[0.02] border border-white/5 p-2.5">
                      <div className="font-mono text-xs font-semibold text-white">{stat.value}</div>
                      <div className="font-sans text-[11px] text-cream/50">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Row */}
              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <div className="flex items-center gap-3">
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`${proj.title} on GitHub`}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 text-cream/70 hover:text-white hover:border-white/30 transition-all"
                    >
                      <GithubIcon className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`${proj.title} live product`}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 text-cream/70 hover:text-white hover:border-white/30 transition-all"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-gold group-hover:translate-x-1 transition-transform">
                  <span>Open Deep-Dive Dossier</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </div>
  );
};
