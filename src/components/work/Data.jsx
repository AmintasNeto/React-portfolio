import DjangoPortImage from "../../assets/django-portfolio.png";
import FlutterPortImage from "../../assets/flutter-portfolio.png";
import SnapgramPortImage from "../../assets/Snapgram.png";

export const projectsData = [
    {
        id: 1,
        image: DjangoPortImage,
        title: 'Django Portfolio',
        category: 'web',
        link: 'https://django-portfolio-zeta.vercel.app/',
        repository: 'https://github.com/AmintasNeto/DjangoPortfolio.git',
        description: "It's a simple shop management web system made using Django Forms, Models and Auth. Because some Vercel limitations the Django version is outdated, which may cause some bugs. \nTo access administrator features log in as amintasneto, the pasword is Neto11.",
        technologies: ["Django, ", "Bootstrap 5, ", "PostgrSql"],
    },
    {
        id: 2,
        image: FlutterPortImage,
        title: 'Flutter E-commerce',
        category: 'app',
        link: 'https://drive.google.com/file/d/11YPlNudz1Wdo_J2zmi8-fWtMwcCuQvuc/view?usp=sharing',
        repository: 'https://github.com/AmintasNeto/Ecommerce_app.git',
        description: "It's a simple E-commerce prototype that uses Google Firebase",
        technologies: ["Flutter, ", "Firebase"],
    },
    {
        id: 3,
        image: SnapgramPortImage,
        title: 'Snapgram',
        category: 'web',
        link: 'https://snapgram-kohl-theta.vercel.app/',
        repository: 'https://github.com/AmintasNeto/Snapgram.git',
        description: "It’s a social media prototipe made using Next.js, React, Tailwind CSS and Appwrite. The page works fine in large screens (PC) as well in small screens (Mobile).",
        technologies: ["React, ", "NextJs, ", "Appwrite, ", "Tailwind CSS"],
    }
]

export const projectsNav = [
    {
        name: 'all',
    },
    {
        name: 'web',
    },
    {
        name: 'app',
    },
]