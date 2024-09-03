🐸[[README]]🌟

>[!example]- 3 tips for Learning
>- **Connect! Connect! Connect!**
>	- Always try your best to connect new info or knowledge with existing ones
>	- Memories are evoked one after another like the domino effect
>	- Don't be too meticulous when you try to think of connections. The more the connection comes as surprise, the stickier to your mind
>- **In and out, they are best buddies.**
>	- Keep the balance between Inputs and outputs
>	- Take a note on a whiteboard, iPad, or a piece of paper off the cuff and talk about it as if you're teaching it to someone else.
>	- Actively recall whatever you've just learnt with Anki or other flashcards
>	- Do mental math or imagine something that could trigger you to recall that object on the spot
>- **Learn with meta-cognition.**
>	- Are you present in this moment?
>	- Aren't you multitasking distracted by multiple things at once?
>		- Multitasking will gradually but definitely eat away at your will power and concentration
>	- Aren't you gravitating toward inputs too much like merely watching YouTube videos, or browsing web pages, without thinking on my own?

> [!calendar]- Recent Daily Notes
> Look back on what occurred to you in the last 7 days.
> ```dataviewjs
> const headings = ["Date", "Free Writing"];
> const fileQuery = '"Daily Notes"';
> dv.table(
> 	headings,
> 	dv.pages(fileQuery)
> 		.sort(p => p.file.day, "desc")
> 		.slice(0, 7)
> 		.map(p => [
> 			p.file.link,
> 			p.file.lists.text
> 		])
> );
> ```
> 
> > [!tips]- 
> > Press `Ctrl + Shift + ↑` to jump to today's daily note
> > Press `Ctrl + Shift + ← or →` to move to the previous or next day's ones
> > Press `Ctrl + Shift + ↓`　to come back home

> [!map]- Map of Contents
> - 📚[[Kindle Library]]
> - 🌲[[Evergreen Garden]]
> - 🧗[[Climbing Map]]
> 
> > [!info]-
> >  - Add links to maps that you frequently visit here
> >  - Bottom-up rather than trickle-down
> > 	 - Create notes first, gather some of them related, and then aggregate them as a map of a bigger concept

> [!boat]- Floating Boat Notes
> Check more details ↪ 🌲[[Evergreen Garden]]
> ```dataview
> TABLE WITHOUT ID file.link as "",  (date(today) - createdAt).day as "Days alive"
> FROM "Notes"
> WHERE status = "⛵"
> SORT createdAt ASC
> LIMIT 10
> ```
> 
> > [!info]- 
> > - Try to find connections of those lonely notes with others
> > - Think of it as an exercise to make it customary to always connect something new with existing ones

> [!goal]- Goals Achieved
> Check more about what's in progress ↪ 🧗[[Climbing Map]]
> ```dataview
> TABLE WITHOUT ID file.link as "", launchedAt, completeAt 
> FROM #🎯 
> WHERE isActive != true and completeAt != date(9999-12-31)
> SORT completeAt DESC
> ```