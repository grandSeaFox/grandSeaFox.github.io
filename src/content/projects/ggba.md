---
title: GGBA
start: "2026-08"
status: Android shipped
summary: >-
  A Game Boy Advance emulator written from scratch in Rust, with an Android app
  on top. No third-party emulator code and no BIOS image. The CPU is an ARM7TDMI
  interpreter checked against gba-tests, and the video, audio, DMA, timers and
  cartridge saves are all there. The core crate knows nothing about the GBA
  specifically, so adding a second console would not mean redoing the app.
stack: [Rust, Android, Jetpack Compose, JNI, C ABI]
featured: true
order: 0
---

It runs about 8× faster than the real hardware on a desktop, and holds 60 fps
on a Pixel 8 Pro using roughly 1.3 of 8 cores. 270 tests, no clippy warnings.

<!-- TODO: case study. The strongest technical artefact here. Why an
     interpreter rather than a JIT, and how the CPU was validated. -->
