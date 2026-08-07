---
title: GGBA
start: "2026-08"
status: Android shipped
summary: >-
  A Game Boy Advance emulator written from scratch in Rust, with a Jetpack
  Compose Android app on top. No third-party emulator code, no BIOS image. An
  ARM7TDMI interpreter validated against gba-tests, a full PPU and APU, DMA,
  timers and cartridge saves. The emu-core crate deliberately knows nothing
  about the GBA, so a second console costs no UI work.
stack: [Rust, Android, Jetpack Compose, JNI, C ABI]
featured: true
order: 0
---

Runs at roughly 8× real time on desktop and holds a locked 60 fps on a Pixel 8
Pro using about 1.3 of 8 cores. 270 tests, zero clippy warnings.

<!-- TODO: case study. The strongest technical artefact here — why an
     interpreter rather than a JIT, and how the CPU was validated. -->
