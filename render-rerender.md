**_ Render and Rerenders in React _**

### The commit phase is usually very fast, but rendering can be slow

# Re-rendering scenario

## Causes for re-render

1. A component can re-render if it calls a setter function or a dispatch function.
2. A component will re-render if its parent component re-rendered.

## Render phase and commit phase

1. Find all elements flagged for update.
2. For each flagged component, convert JSX to React element and store the result.
3. Perform reconciliation-Diff old and new tree of React elements (aka Virtual DOM).

### useState and Rerender

The setter function from a useState hook will cause the component to re-render.
The exception is when you update a State Hook to the same value as the current state.
Same value after initial render? The component will not re-render.
Same value after re-renders ? React will render that specific component one more time and then bails out from any subsequent renders.

### Parent and Child Render

1. New state is different from the old state
   Parent and Child both will rerender
2. New State is same as the old state
   a. Right after the initial render
   None of the components will re-render
   b. After re-renders
   Only the Parent component will re-render

## Unnecessary Renders

When a parent component renders, React will recursively render all its child components.
Unnecessary renders are where the child component goes through the render phase but not the commit phase

### Same Element Reference

Component can change its state but not props.
Use children prop instead of directly using a component as a child to the parent component because the parent component has no means of directly changing the props.
Children props couldn't have changed.
React makes use of React-Element that was previously created hence the render phase of ChildOne will be skipped.

### React.memo

In React, when a parent component renders, a child component might un-necessarily render.
To optimize this behaviors, you can use React.memo and pass in the child component.
React.memo will perform a shallow comparison of the previous and new props and re-render the child component only if the props have changed.

## When to use the same element reference technique and when to use React.memo?

### Same Element Reference

1. When parent component re-renders because of state change in the parent component. State changes => yes
2. This technique doesn't work if the parent component re-renders because of changes in its props. Props change => no

### React.memo

When Child component re-renders due to state changes in parent which doesn't effect child component props in anyway.

"Shallow comparisons aren't free. They're O(prop count). And they only buy something if it bails out.
All comparisons where we end up re-rendering are wasted. Why would you expect always comparing to be faster? Considering many components always get different props."

- Dan Abramov

# useMemo & useCallback hooks

When the parent component has an object or a function in it don't use React.memo to memoize the children.
Always use useMemo to memoise an object or an array or any other by-reference entity
Always use useMemo to memoise an object or an array or any other by-reference entity
and useCallback to memoise the functions and useCallback to memoise the functions.

## Context and Render

When context provider is in the parent component and the parent component's state updates, every child component re-renders and not just the component consuming the context value.
Use React.memo to wrap the immidiate child to avoid the behaviour mentioned above
Or use the children prop
