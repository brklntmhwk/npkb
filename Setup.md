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
- Turn on all the plugins in "Community Plugins > Installed plugins" and click the reload button right above the setting

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

As for things the Minimal Theme Settings cannot handle, you can also add CSS to the style sheet (`.obsidian/snippets/global.css`). In that case, note that you need to have a code editor in your local (e.g., [VSCode](https://code.visualstudio.com/)) because it's impossible to open it from this vault. Incidentally, you can see class names via the developer console Obsidian offers.
