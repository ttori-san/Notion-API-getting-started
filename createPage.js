import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_KEY });

async function createPage(text) {
	const response = await notion.pages.create({
		parent: {
			database_id: process.env.NOTION_DATABASE_ID,
		},
		properties: {
			title: {
				type: "title",
				title: [
					{
						text: {
							content: text,
						},
					},
				],
			},
			Tags: {
				type: "multi_select",
				multi_select: [
					{
						name: "Notion_API",
					},
				],
			},
		},
	});
	console.log(response);
}
createPage("added Page with Tags");
