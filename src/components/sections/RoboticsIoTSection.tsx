import React from 'react';
import { SpotlightCard } from '../common/SpotlightCard';
import { ArrowRight, Cpu, Radio, Wrench, Activity, Factory } from 'lucide-react';
import { UiverseSkillCard } from '../ui/uiverse-skill-card';

interface RoboticsIoTSectionProps {
  onSelectDetail: (detailId: string) => void;
}

const HARDWARE_SYSTEMS = [
  {
    id: 'sleepguard-hardware',
    title: 'SleepGuard IoT Biometric Unit',
    subtitle: 'ESP32 Edge Pulse Oximeter & Bio-Telemetry Rig',
    badge: 'Hardware Rig · Published',
    detailId: 'research-sleepguard',
    description:
      'Engineered an edge biometric sensor acquisition rig utilizing an ESP32 microcontroller, MAX30102 pulse oximeter sensor, and an I2C 128x64 OLED display. Acquired real-time SpO2 and pulse waveforms in non-blocking FreeRTOS tasks to feed clinical ML apnea classification.',
    techStack: ['ESP32 (Tensilica)', 'FreeRTOS', 'MAX30102 Optical Sensor', 'SSD1306 OLED', 'I2C Bus', 'C++ Firmware'],
    stats: [
      { label: 'Microcontroller', value: 'ESP32 Dual-Core' },
      { label: 'RTOS Engine', value: 'FreeRTOS Queues' },
      { label: 'Display Protocol', value: 'I2C 400kHz' },
      { label: 'Target Paper', value: 'iCONEECT 2026' },
    ],
  },
  {
    id: 'projectile-robotics',
    title: 'Projectile Robotics & Hardware Labs',
    subtitle: 'Industrial Assembly, Motor Controllers & Shop Management',
    badge: 'Industry Practice',
    detailId: 'pillar-systems',
    description:
      'Working on-site at Projectile Electronic building robotics assemblies, custom sensor interfaces, and DC/stepper motor control circuits. Balancing hardware soldering, component diagnostics, and leadership shop-management operations.',
    techStack: ['Robotics Prototyping', 'L298N Drivers', 'Arduino AVR', 'PWM Controls', 'Power Regulation', 'Diagnostics'],
    stats: [
      { label: 'Role', value: 'Robotics & Frontend Dev' },
      { label: 'Company', value: 'Projectile Electronic' },
      { label: 'Focus', value: 'Mechatronics & Assembly' },
      { label: 'Scope', value: 'Hardware + Leadership' },
    ],
  },
  {
    id: 'autonomous-rover',
    title: 'Autonomous Obstacle Traversal Unit',
    subtitle: 'Sonar-Guided Reactive Rover Firmware',
    badge: 'Robotics Prototype',
    detailId: 'skill-embedded-iot',
    description:
      'Designed and wired an autonomous robotic rover with an HC-SR04 ultrasonic sensor array mounted on a mini servo, calculating directional distance vectors in real time to navigate complex physical obstacles without collision.',
    techStack: ['Arduino (C++)', 'Ultrasonic HC-SR04', 'Servo Sweep', 'L298N H-Bridge', 'Interrupt Handlers', 'DC Motors'],
    stats: [
      { label: 'Navigation Loop', value: 'Real-Time Sonar' },
      { label: 'Obstacle Threshold', value: '15 cm Evasion' },
      { label: 'Power Source', value: 'Lithium 7.4V' },
      { label: 'State Model', value: 'Deterministic FSM' },
    ],
  },
];

const IOT_SKILLS = [
  { name: 'ESP32 (Tensilica Dual-Core)', level: 'Advanced', note: 'WiFi/BLE stack, multi-core task pinning, FreeRTOS' },
  { name: 'Arduino (AVR Architecture)', level: 'Advanced', note: 'Hardware interrupts, timer counters, PWM motor drives' },
  { name: 'I2C & SPI Protocol Busses', level: 'Production', note: 'SSD1306 display drivers, sensor address arbitration' },
  { name: 'Optical Biometric Sensors', level: 'Applied', note: 'Photoplethysmography (PPG), pulse oximetry, filtering' },
  { name: 'Circuit Assembly & Soldering', level: 'Practitioner', note: 'PCB breadboarding, voltage regulation, power rails' },
  { name: 'Deterministic Firmware FSM', level: 'Advanced', note: 'Non-blocking state machines, debounce timers, low power' },
];

export const RoboticsIoTSection: React.FC<RoboticsIoTSectionProps> = ({ onSelectDetail }) => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 py-16 sm:py-24 overflow-x-clip">
      {/* Sector Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b dark:border-white/10 border-black/10 pb-8 mb-16">
        <div>
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] dark:text-cream/50 text-neutral-500 mb-2">
            <span className="text-gold">Engineering Sector</span>
            <span>/</span>
            <span>02</span>
          </div>
          <h2 className="font-forum text-3xl sm:text-4xl md:text-5xl dark:text-white text-neutral-900 tracking-tight">
            Robotics, Firmware & Embedded IoT
          </h2>
        </div>
        <p className="font-sans text-sm dark:text-cream/60 text-neutral-600 max-w-md font-light leading-relaxed">
          Bridging physical hardware with deterministic low-level firmware: microcontrollers, real-time sensor loops, and industrial robotics.
        </p>
      </div>

      {/* Core Technical Stack Banner */}
      <div className="mb-14 rounded-2xl border dark:border-white/10 border-black/10 dark:bg-[#111111] bg-white p-5 sm:p-8 shadow-sm dark:shadow-[0_12px_32px_rgba(0,0,0,0.5)]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b dark:border-white/10 border-black/10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/40 bg-gold/10">
              <Cpu className="h-5 w-5 text-gold" />
            </div>
            <div>
              <h3 className="font-forum text-xl dark:text-white text-neutral-900">Hardware & Firmware Toolchain</h3>
              <p className="font-sans text-xs dark:text-cream/60 text-neutral-600 font-light">Direct register control, FreeRTOS synchronization, and electro-mechanical assembly.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border dark:border-white/10 border-black/10 dark:bg-white/5 bg-neutral-100 px-3 py-1 font-mono text-xs dark:text-cream/80 text-neutral-700">
              <Radio className="h-3 w-3 text-gold" /> FreeRTOS Multi-Core
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border dark:border-white/10 border-black/10 dark:bg-white/5 bg-neutral-100 px-3 py-1 font-mono text-xs dark:text-cream/80 text-neutral-700">
              <Activity className="h-3 w-3 text-gold" /> Optical Telemetry
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border dark:border-white/10 border-black/10 dark:bg-white/5 bg-neutral-100 px-3 py-1 font-mono text-xs dark:text-cream/80 text-neutral-700">
              <Factory className="h-3 w-3 text-gold" /> Projectile Labs
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3.5 pt-4">
          {IOT_SKILLS.map((skill, idx) => (
            <UiverseSkillCard
              key={idx}
              name={skill.name}
              level={skill.level}
              note={skill.note}
              onClick={() => onSelectDetail('skill-embedded-iot')}
            />
          ))}
        </div>
      </div>

      {/* Hardware Systems Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {HARDWARE_SYSTEMS.map((system) => (
          <SpotlightCard
            key={system.id}
            onClick={() => onSelectDetail(system.detailId)}
            className="p-6 sm:p-7 flex flex-col justify-between group cursor-pointer hover:border-gold/40 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-3.5">
                <span className="inline-flex items-center whitespace-nowrap shrink-0 rounded-full border border-gold/40 bg-gold/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-gold shadow-[0_0_10px_rgba(212,175,55,0.08)]">
                  {system.badge}
                </span>
                <Wrench className="h-4 w-4 dark:text-cream/40 text-neutral-400 group-hover:text-gold transition-colors" />
              </div>

              <h3 className="font-forum text-xl dark:text-white text-neutral-900 tracking-wide mb-1 group-hover:text-gold transition-colors line-clamp-2">
                {system.title}
              </h3>
              <p className="font-sans text-xs font-medium text-gold/90 dark:text-gold/80 mb-2.5 line-clamp-2">
                {system.subtitle}
              </p>
              <p className="font-sans text-xs dark:text-cream/65 text-neutral-600 leading-relaxed font-light mb-4 line-clamp-2">
                {system.description}
              </p>

              {/* Core Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {system.techStack.slice(0, 3).map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded-md border dark:border-white/10 border-black/10 dark:bg-white/5 bg-neutral-100 px-2 py-0.5 font-mono text-[10px] dark:text-cream/80 text-neutral-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-mono text-gold group-hover:translate-x-1 transition-transform pt-3 border-t dark:border-white/5 border-black/10">
              <span>Inspect Hardware Dossier</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
};
