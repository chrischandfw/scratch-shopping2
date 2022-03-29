## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
1. **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1. **For each HTML element ask: Why do I need this?**
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1. **Think about how to validate each of your features according to a Definition of Done**
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:

-   Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
-   Consider your data model.
    -   What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
    -   What are the key/value pairs?
    -   What arrays might you need?
    -   What needs to live in a persistence layer?
-   Is there some state we need to initialize?
-   Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)

## Supabase Table (state) Data Model / Schema
	'shopping_list'
	- amount: int2
	- item_name: string
	- is_bought: boolean

## Home Page (Auth)
	- comes with the template

## Shopping List
	- form
	- destination/list div
	- delete button

## Events
	- on load
		- fetch and display user's existing list items
			- call supabase to fetch all shopping items for this user
			- loop through those items, create DOM elements, and append -- render items differently if "bought: true"
	- submit 'add item' form
		- add the new item and quantity to the list
			- send the new item to supabase and create a new row
			- clear out the old list
			- fetch the list again
			- loop through those items, create DOM elements, and append -- render items differently if "bought: true"
	- user clicks "2 pounds of flour"
		-"2 pounds of flour" counts as "bought" and is crossed out from the list
			- update 'bought' to true in the database
			- clear out the old list
			- fetch the list again
			- loop through those items, create DOM elements, and append -- render items differently if "bought: true"
	- on click delete list button
		-redisplay all items (which should ne an empty list now)