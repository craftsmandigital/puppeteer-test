
import url from 'url';
import { createRunner } from '@puppeteer/replay';

export const flow = {
    "title": "test",
    "steps": [
        {
            "type": "setViewport",
            "width": 958,
            "height": 961,
            "deviceScaleFactor": 1,
            "isMobile": false,
            "hasTouch": false,
            "isLandscape": false
        },
        {
            "type": "navigate",
            "url": "https://craftsmandigital.net/",
            "assertedEvents": [
                {
                    "type": "navigation",
                    "url": "https://craftsmandigital.net/",
                    "title": "3 CraftsmanDigital <craftsmandigital.net>"
                }
            ]
        },
        {
            "type": "click",
            "target": "main",
            "selectors": [
                [
                    "#search-term"
                ],
                [
                    "xpath///*[@id=\"search-term\"]"
                ]
            ],
            "offsetY": 16.25,
            "offsetX": 147
        },
        {
            "type": "change",
            "value": "halla",
            "selectors": [
                [
                    "#search-term"
                ],
                [
                    "xpath///*[@id=\"search-term\"]"
                ]
            ],
            "target": "main"
        }
    ]
};

export async function run(extension) {
  const runner = await createRunner(flow, extension);
  await runner.run();
}

if (process && import.meta.url === url.pathToFileURL(process.argv[1]).href) {
  await run();
}