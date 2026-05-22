# EXP 001 — Self-Recognition Under Distortion

## Purpose
This experiment tests the first Biscuit Vision principle:

> An eye should first learn to recognize its own perfect shapes after the world distorts them.

The system prints an internal truth shape, applies distortion, scans the warped result, writes a deformation sentence, and attempts to decide whether the object is still the same shape.

## Core Question
Can a simple observer preserve object identity through distortion?

## Tested Shapes
- `○` circle
- `△` triangle
- `□` square

## Tested Distortions
- horizontal stretch
- vertical stretch
- translation drift
- skew / perspective strain
- wave distortion
- noise
- occlusion / damage

## Key Terms

### Perfect Shape
The internally generated reference object.

### Warped Reality
The transformed version of the perfect shape.

### Deformation Sentence
A symbolic description of how far the current object has travelled from perfect.

Examples:

```text
○ +-----* ↕||||* ~~~*
□ *____+ ↔--------* ◌◌◌*
△ +---* ////* ↕||||||*
```

### Lock Confidence
A rough score showing whether the observer still believes the warped object belongs to the same shape family.

## Discovery From This Experiment
The first major discovery was that **a single observer does not work for every shape**.

A circular/radial observer can lock well onto circles, but it can misread triangles and squares. This revealed the need for:

```text
shape-specific observers
```

Circle reality needs a circle eye. Triangle reality needs a triangle eye. Square reality needs a square eye.

## Why This Matters
The failure cases are valuable because they expose hidden assumptions inside the observer.

This experiment establishes the foundation for:

- observer species
- deformation language
- inverse lens recovery
- camera-based perspective learning
- sensor-fused visual grounding

## Files
- `index.html` — runnable browser experiment
- `experiment-log.md` — structured notes and observations
- `capture-template.md` — template for recording individual runs
