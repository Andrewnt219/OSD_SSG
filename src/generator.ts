import prettier from 'prettier';

const generateHTML = (
  content: string,
  title: string,
  includeHeading: boolean,
  lang: string,
  stylesheetHref: string,
  homeHref?: string
): string => {
  const head = `<meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="${stylesheetHref}"> 
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/default.min.css">
                ${title ? ` <title>${title}</title>` : ''}`;

  const body = `
                ${homeHref ? `<a class="backToHome" href="${homeHref}">Back to home</a>` : ''}
                ${title && includeHeading ? `<h1 class="text-center">${title}</h1>` : ''}
                ${content}
                  `;

  const markup = `<!DOCTYPE html>
                  <html lang="${lang}">
                    <head>
                      ${head}
                    </head>
                    <body>
                      ${body}
                    </body>
                  </html>`;

  return prettier.format(markup, { parser: 'html' });
};

export default generateHTML;
