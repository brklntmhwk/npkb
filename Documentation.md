🔙[[README]]
## Minimal Setup

>[!warning]+ Prerequisites
> - Install [Git](https://git-scm.com/) and [Obsidian](https://obsidian.md/) to your local

1. Clone this repository to wherever you like in your local
- Run this command anywhere you want to put your vault in
	- Hereafter, you're supposed to be at the directory of your vault

```
git clone https://github.com/brklntmhwk/npkb.git ${YOUR_VAULT_NAME}
```

2. Open Obsidian and let it read your vault above
- Open Obsidian
- From "Open folder as vault", select your vault

3. Set appearance
- Turn on "Appearance > CSS Snippets > global" and click the reload button right above the setting
- Change "Appearance > Themes" to "Minimal"

4. Enable community plugins
- Turn on all the plugins except "Git" in "Community Plugins > Installed plugins" and click the reload button right above the setting

5. Commit and push to your repository
- Run the series of commands below in your code editor or terminal
```
git branch -M main
git remote rm origin
git remote add origin ${YOUR_REPOSITORY_NAME}
git add .
git commit -m "${YOUR_COMMIT_MESSAGE}"
git push origin main

# You can check the current remote repository
git remote -v
```

6. Enable the Git plugin 
- Follow the same step as No.4
- After enabling it, some prompts might pop up to ask you about your Git remote repository. Select "main" and "origin/main" respectively

Hereafter, you can commit changes and push them to your remote repository by running the command "QuickAdd: Git commit & push".
## Optional Setup
### Kindle Highlights
>[!warning]+ Prerequisites
> - Enable the Kindle Highlights plugin beforehand

1. Select "Kindle Highlights: Sync highlights" from the command palette or "Sync your Kindle highlights" from the ribbon menu that usually sits on the left side as an icon
2. Click the "Sync..." button
3. Select "Amazon Cloud"
4. Log in to your Amazon account

Now you can see files under the Kindle Highlights directory, each of which has a title of a single book as its filename, the metadata of the book, the data of the highlighted lines in the book, etc.
### Appearance
You can change appearance such as font size, layout, color theme, etc. See "Community Plugins > Minimal Theme Settings" for more details.

As for things the Minimal Theme Settings cannot handle, you can also customize CSS in `.obsidian/snippets/global.css`. In that case, note that you need to have a code editor in your local (e.g., [VSCode](https://code.visualstudio.com/)) because it's impossible to open it from this vault. Incidentally, you can see class names via the developer console Obsidian offers. (Press `Ctrl(⌘) + Shift(⌥) + I` )
## Tips
>[!info]+ Note
> You will only see tips on what are unique to this vault. For more basic or common tips about Obsidian, consult [the official doc](https://help.obsidian.md/Home) .
### Create a new note with prompts
![[Documentation-20240903115733087.webp]]
You can do so by doing one of these:
- Press `Ctrl(⌘) + N` 
	- This is registered as a shortcut key by default
- Click "Create New Note with Prompts" from the ribbon menu bar
	- On PC, it's usually on the left
- Run the command "Templater: Insert Templates/Meta Template.md" from the command palette

After that, you will see media options and then a title input prompt pop up. Select one of those and fill in the note title respectively.

>[!warning]+ Caution
> Make sure you're following either of the ways above when creating a new note. Otherwise, notes will be created with empty content. They are supposed to be under the "+" directory.
### Create a new daily note for today
You can do so by doing one of these:
- Click today on the calendar shown in the right sidebar
	- You need to put it there manually in advance
- Click "Open Today" from the ribbon menu bar
- Run the command "Periodic Notes: Open daily note" from the command palette
	- This creates a new today's note if it doesn't exist
### Add a new tag to the options
- Go to "Community Plugins > Metadata Menu > Preset Fields Settings"
- Click the pen icon on the right side of the "tags" row
- Add a new tag from the "Add a value" menu

>[!warning]+ Caution
> You can also add them from the frontmatter area of each note, but the tags added that way don't appear in the options.