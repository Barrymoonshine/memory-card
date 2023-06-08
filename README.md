# Memory card game

[Live demo](https://barrymoonshine.github.io/memory-card/)

## Summary

Spot the shark is a simple memory card game in which the user has to remember what cards (sharks) they have previously clicked. The user's current score and best score are tracked and displayed on the top of the page. This app was built using React functional components.

## Key learning points

- Using variables to update the current state so that multiple changes can be made to state in one render and related functions have access to the new version of state prior to the useState hook (which is asynchronous) updating
- Managing state centrally in a main file, and using child components to update state via callback functions passed using props
- Dynamically passing image URls from a parent to a child component using props
- State is isolated and private, meaning that it's not possible to use a dynamically rendered child component to manage state if this needs to be shared across components, and the right way to manage this is in the closest shared parent
- Sorting the elements of an array by property value using the sort array method
