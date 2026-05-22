# EXP 002 — Live Tracking Eye

## Purpose
This experiment moves Biscuit Vision from single-frame analysis into continuous perception.

The eye uses a live webcam stream to track a target shape over time, writing deformation language every frame and preserving a short motion memory.

## Core Question
Can the eye maintain identity continuity while the observer/camera moves?

## What This Tests
- live webcam tracking
- continuous deformation sentences
- lock confidence over time
- motion language
- tracking genes
- first step toward phone/sensor fusion

## Shape Targets
- `○` circle
- `△` triangle
- `□` square

## New Language Added

```text
motion→---*
motion←___*
motion↑|||*
motion↓III*
```

These describe frame-to-frame movement rather than static deformation.

## Why This Matters
This is the transition from image analysis to perceptual streaming.

The system no longer only asks:

```text
What shape is this?
```

It begins asking:

```text
How is this shape moving through observed reality?
```

## Files
- `index.html` — live tracking browser demo
