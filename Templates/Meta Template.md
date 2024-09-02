<%*
let title;
let template;
let folder;

const media = await tp.system.suggester((item) => item, ["📖", "🧠", "🎧", "📰", "📻", "🌐", "🕸️", "❓",], true);

if (media != "❓") {
	folder = "Notes/Gleanings";
	title = await tp.system.prompt("Title:", undefined, true);
	title = tp.user.validateTitle(title);
	switch (media) {
		case "📖": {
			template = tp.file.find_tfile("Book");
			break;
		}
		case "🧠": {
			template = tp.file.find_tfile("ChatGPT");
			break;
		}
		case "🎧": {
			template = tp.file.find_tfile("Music");
			break;
		}
		case "📰": {
			template = tp.file.find_tfile("Paper");
			break;
		}
		case "📻": {
			template = tp.file.find_tfile("Radio Podcast");
			break;
		}
		case "🌐": {
			template = tp.file.find_tfile("SNS");
			break;
		}
		case "🕸️": {
			template = tp.file.find_tfile("Website");
			break;
		}
		default:
			break;
	}
	await tp.file.create_new(template, title, true, folder)
	const file = tp.file.find_tfile(tp.file.path(true));
	await app.fileManager.processFrontMatter(file, fm => {
		fm["tags"] = null;
		fm["aliases"] = null;
		fm["createdAt"] = tp.date.now("YYYY-MM-DD");
		fm["modifiedAt"] =  tp.date.now("YYYY-MM-DD HH:mm");
		fm["media"] = media;
		fm["status"] = "⛵";
		if(media === "📖" || media === "📰") {
			fm["title"] = title;
			fm["author"] = "John Doe";
		}
		if(media === "🧠") {
			fm["tags"] = "ChatGPT";
		}
	});
} else {
	const type = await tp.system.suggester((item) => item, ["🎯", "👨‍🏫", "🗺️", "❓"], true)
	title = await tp.system.prompt("Title:", undefined, true)
	title = tp.user.validateTitle(title)
	switch (type) {
		case "🎯": {
			template = tp.file.find_tfile("Goal");
			folder = "Notes/Efforts";
			break;
		}
		case "👨‍🏫": {
			template = tp.file.find_tfile("Concept");
			folder = "Notes/Concepts";
			break;
		}
		case "🗺️": {
			template = tp.file.find_tfile("MOC");
			folder = "Notes/MOC";
			break;
		}
		default: {
			template = tp.file.find_tfile("Others");
			folder = "+";
			break;
		}
	}
	await tp.file.create_new(template, title, true, folder)
	const file = tp.file.find_tfile(tp.file.path(true));
	await app.fileManager.processFrontMatter(file, fm => {
		switch (type) {
			case "🎯": {
				fm["tags"] = "🎯";
				fm["isActive"] = true;
				fm["launchedAt"] = fm["createdAt"];
				fm["completeAt"] = moment(new Date("9999-12-31")).format("YYYY-MM-DD");
				break;
			}
			case "👨‍🏫": {
				fm["tags"] = null;
				fm["status"] = "⛵";
				break;
			}
			case "🗺️": {
				fm["tags"] = null;
				fm["status"] = "⛵";
				break;
			}
			default:
				break;
		}
	});
}
-%>
