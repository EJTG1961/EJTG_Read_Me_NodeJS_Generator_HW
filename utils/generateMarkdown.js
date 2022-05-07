// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `[License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n * [#License](#license)\n`;
  }
  return " ";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
    
    
     This project is licensed under ${license}.`;
  }
  return " ";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}
 ${renderLicenseBadge(response.license)} 
 # Table of Content
-[description](#description)
-[installation](#installation)
-[usage](#usage)
-[licenses](#licenses)
-[contributors](#contributors)
-[test](#test)
-[username](#username)
-[github](#github)

${response.userName}
#username:

    ${response.description}
#description:

    ${response.installation}
##installation:

    ${response.usage}
##usage:

    ${response.licenses}
##licenses:

    ${response.contribution}
##contribution:

    ${response.test}
##test:

    ${response.email}
##email:

    ${response.github}
##profile:
`;
}

module.exports = generateMarkdown;
