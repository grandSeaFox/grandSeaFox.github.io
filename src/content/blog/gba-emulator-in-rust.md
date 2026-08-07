---
title: Writing a Game Boy Advance emulator in Rust
date: 2026-08-01
summary: >-
  Why an interpreter and not a JIT, validating an ARM7TDMI against gba-tests,
  and keeping emu-core ignorant of the console it drives.
tags: [rust, emulation]
draft: true
---

<!-- Draft. Flip `draft: false` to publish. -->

Outline:

- Why the GBA is the right system to build first, and why it needs no JIT.
- Validating the CPU against `gba-tests` rather than trusting a passing game.
- Keeping `emu-core` console-agnostic: naming buttons by position, describing
  screens as a list inside one framebuffer.
- The numbers: 8× real time on desktop, 60 fps on a Pixel 8 Pro at 1.3 cores.
