# Journal

## Lessons Learned

- The color of SVGs is easily manipulated via the `fill` attribute and, even better, can use currentColor to inherit its parent color. _However_ we are using tailwind so the correct way is to, on the svg, add the className with the appropriate color with `fill-` as the prefix. For example:

```jsx
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  className="h-6 w-6 fill-blue-400"
>
  <path
    fillRule="evenodd"
    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
    clipRule="evenodd"
  />
</svg>
```
