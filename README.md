---
modifiedAt: 2024-09-06 10:56
aliases: []
---
🔙[[Home]]
## Intro
![NPKB Image](./Assets/Images/npkb.png)

For setup and usage, see [[Documentation]].

Welcome to **Nagi's Personal Knowledge Base (NPKB)**. I created it for the following reasons:

- To offer someone else a ready-made vault template
- To showcase my vault with bunches of customization
- To give someone else some insights into
	- what an Obsidian vault looks like
	- how it works as a personal knowledge base
	- what the vault structure should be like

This vault has nothing to do with the following things:

- Schedule and task management
	- Managing them on your smartphone or tablet is much more handy
	- A lot of useful calendar and To-do apps available now
- Mind map and other visualization
	- The same reason as above (e.g., iPad)
	- Personally, I love using iPad when creating a mind map or visualizing any ideas or thoughts
- Quick notes creation and management
	- You can leave quick notes here on the spot if you're on the PC but if not, it's quite hard
	- Figure out another alternative way possibly with your smartphone or tablet (e.g., When you're walking outside)

## Version Management
The version of this vault is managed with [Git](https://git-scm.com/), which enables you to sync and share your vault among multiple devices and machines.
## The Evergreen Ethos

^eb4bbe

As an indicator of to what extent a note has been matured, the following emojis are used in the frontmatter of notes. This concept is the Evergreen ethos advocated by [Andy Matuschak](https://andymatuschak.org/).

- `⛵: boat note` Just started or floating around isolated from other notes
- `🌱: seedling` Growing with a few contents and bidirectional links added but still in its infancy
- `🌿: budding` Growing with more than a few  bidirectional links and contents added but still developing
- `🌲: evergreen forest`  Well developed and full-fledged "Evergreen Notes"

By introducing these to your note-taking system, you can clearly see their maturity as a note and easily prioritize them. I determined the classification above referring to [Bryan Jenks](https://notes.bryanjenks.dev/Z/HOME).
## Directory Tree
Since this place adheres to [[#^eb4bbe|the Evergreen ethos]] and [bidirectional links](https://help.obsidian.md/Linking+notes+and+files/Internal+links), **hierarchical directory structures are not so important as traversal links**. So don't rack your brain too much over them. Keep them to an absolute minimum.

Here's the directory tree of this vault.
```
NPKB/
├── +/
├── Assets/
│   └── Images/
├── Daily Notes/
│   └── ...
├── Kindle Highlights/
│   └── ...
├── Notes/
│   ├── Concepts/
│   ├── Efforts/
│   ├── Gleanings/
│   └── MOC/
│       ├── Climbing Map
│       ├── Evergreen Garden
│       └── Kindle Library
├── Scripts/
│   └── ...
├── Templates/
│   └── ...
├── Documentation
├── Home
└── README
```
## Note Classification
### Daily Notes
Daily notes contain:

- The gist of that day
- A data table to show all notes created on that day
- A free writing area
	- Whatever you want to take a note of or pops into your mind could be here

This is helpful to centralize the info or data gathered on that day, which in turn creates a strong connection between the resources and the date.
### Templates
Notes are created based on templates. By answering some prompts, you can create a note from a specific template.
### Notes
Notes contain the rest of all. They are supposed to be, so to speak, "Evergreen Notes" down the road, following [[#^eb4bbe|the evergreen process]] above.
#### Concepts
You can manage bigger and more abstract things here. When you want to start with a bigger concept from the beginning, this is the one.
#### Efforts
Your long-term goals are supposed to be here. You can see the whole progress of your projects in the [[Climbing Map]].
#### Gleanings
Everything gathered from external info sources (e.g., Social media) are placed here.
#### MOC(Map Of Content)
A map of content is a collection of notes that are geared towards a specific topic.

As you can see in this vault, there's no special rules about it, but **one thing to be kept in mind is a "Note first, map last" slogan**. That is rather a bottom-up process than that of trickle-down; it's not until you raise a decent number of notes that you start creating the map. (Existing MOCs are exceptional though)
## Media
As an inlet of new notes, you can choose an info medium to specify where you collect it from. After [[Documentation#Create a new note with prompts | a set of interactive prompts]], a new note is created based on the matched template, which facilitates the note editing process.
- `📖` **Book:** Paper books (Kindle excluded)
- `🧠` **ChatGPT:** Chats with ChatGPT
- `🎧` **Music:** Songs from streaming services like Spotify
- `📰` **Paper:** Research paper
- `📻` **Radio/Podcast**
- `🌐` **SNS:** YouTube, X, Instagram, etc
- `🕸` **Website**
- `❓` **Others:** Concepts or irregular topics