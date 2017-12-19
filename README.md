# {{ Hi! }}

I'm somewhat new to React and Preact. I really want to use React Dates in a Preact
app, but I'm repeatedly getting some errors on build (although it works fine in production).
The errors aren't showstoppers, but I can't figure out how to make them go away.

I'm creating this little repo to hopefully get some help from the cool folks at
airbnb react-dates.

😬 If I'm being dumb, feel free to yell at me.

# to reproduce the errors I'm seeing

1. Clone this repo.
2. Run `yarn install`
3. Run `yarn start`
4. http://localhost:8080/ (or wherever)

You'll see a bunch of:

`Warning: Failed prop type: WithStyles: unknown props found: children`
`Warning: Failed prop type: DateRangePicker: unknown props found: children`
`Warning: Failed prop type: DateRangePickerInputController: unknown props found: children`
`Warning: Failed prop type: DateRangePickerInput: unknown props found: children`
`Warning: Failed prop type: DateInput: unknown props found: children`

# errors vanish in yarn build
If you `yarn build` and run a `python -m SimpleHTTPServer` on the build file, I see the DateRangePicker
render and function perfectly, leading me to think this is just a dev problem.

Any/all help appreciated!

-Matt
