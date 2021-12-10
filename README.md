# My Portfolio Website

This repository is about the portfolio with all my projects done so far, these range from milestone projects that I did during my studies at **Code Institute**, to mini projects that I've been doing during the specialization courses taught by **Udemy**.

**You can visit my portfolio website by clicking [here](https://cotebarrientos.github.io/my-portfolio/).**

---

## Content

1. [**Technologies Used**](#technologies-used)
    - [Languages](#languages)
    - [Libraries](#libraries)
    - [Tools Used](#tools-used)
2. [**Deployment**](#deployment)
    - [Clone Project from GitHub](#clone-project-from-github)
    - [Local Deployment](#local-deployment)
    - [Deployment using GitHub Pages](#deployment-using-github-pages)
3. [**Credits**](#credits)
    - [Code](#code)
    - [Media](#media)
    - [Acknowledgements](#acknowledgements)

---

## Technologies Used

### Languages

- HTML 5
- CSS 3
- JavaScript
- JSX

### Libraries

- React JS 17.0.2
- React-scroll 1.8.4
- React-icons 4.3.1
- Bootstrap 5.1.3
- React-bootstrap 2.0.2
- Animate.css 4.1.1
- AOS 2.3.4
- Email JS 3.2.0
- gh-pages 3.2.3
- Google Fonts

### Tools Used

- VS Code
- Git
- GitHub
- Adobe Photoshop CS6 portable version 13.0.0

## Deployment

### Clone Project from GitHub

**1.** Follow this link to the [Project GitHub repository](https://github.com/cotebarrientos/my-portfolio).

**2.** Scroll to the top of this repository and click on the "clone or download button".

**3.** Decide whether you want to clone the project using HTTPS or an SSH key and do the following:

- **HTTPS:** click on the checklist icon to the right of the URL.
- **SSH key:** first click on 'Use SSH' then click on the same icon as above.

**4.** Open the 'Terminal'.

**5.** Choose the location for the cloned directory.

**6.** Type `git clone`, and then paste the clone URL.

    $ git clone https://github.com/username/repository-name

**7.** Press 'Enter' to create your local clone.

### Local Deployment

**1.** After cloning this project, navigate to the correct file location after unpacking the files.

    $ cd <path to folder>

**2.** Now type this command in the console in order to install all the libraries used in this project.

    $ npm install

**3.** Then run the following command in the terminal, in order to run this project locally.

    $ npm start


**4.** After that, this React project should be running on `http://localhost:3000/`

### Deployment using GitHub Pages

**1.** Install the `gh-pages` package using the following command:

    $ npm install gh-pages — save-dev

**2.** Add homepage property to `package.json` file as follow:

    {
        "homepage": "https://username.github.io/repository-name/",
        "name": "project_name",
        "version": "0.1.0",
        "private": true,
        "dependencies": {...},
        "scripts": {...},
        "eslintConfig": {...},
        "browserslist": {...},
        "devDependencies": {
            "gh-pages": "^3.2.3"
        }
    }

**3.** Write the *"predeploy"* and *"deploy"* scripts under `package.json` file as follow:

    "scripts": {
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build",
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject"
    }

**4.** Save `package.json`, and run the following command to deploy it to GitHub Pages

    $ npm run deploy

**5.** Now if you switch to your GitHub repository and then Settings -> GitHub pages section you will be able to see the URL that you assigned to the homepage property in your `package.json`.

## Credits

### Code

These websites were really useful to troubleshooting the issues I faced:

- [Stackoverflow](https://stackoverflow.com/)
- [geeksforgeeks](https://www.geeksforgeeks.org/)
- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.1/getting-started/introduction/)
- [React Bootstrap Documentation](https://react-bootstrap.github.io/getting-started/introduction/)
- [React Documentation](https://es.reactjs.org/)
- [w3schools](https://www.w3schools.com/)

### Media

- Some images were obtained from [Iconfinder](https://www.iconfinder.com/) and [Unsplash](https://unsplash.com/).
- My photographs used in this website were taken with a Poco x3 nfc phone and were enhanced using Photoshop.

### Acknowledgements

I would like to thank the following people who encouraged me to continue specializing in the IT area.

- My boyfriend.
- My grandma and my little sister.
- My friend Sulley.

**[Back to top](#my-portfolio-website)**

---

> Note: My portfolio will be updated as new projects are developed, so be aware of the new updates.