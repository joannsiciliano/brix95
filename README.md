# BRIX 95

# Background/Objective

Three FULL STACK SOFTWARE ENGINEERS decided to make a throwback app recalling a simpler time when React (heck, even Facebook) did not exist. The result: Brix95, an app where a user can peruse and rate the strains of marijuana that one would be likely to find in the mid-nineties. To help facilitate such an app, the framework [React95](https://www.npmjs.com/package/react95) was incorporated to give the retro look. Our goal was to have some fun and get creative with a theme that also demonstrated full stack technological proficiency.

# Code Example

```
const [singlePost, setSinglePost] = useState([]);
  const [hasError, setErrors] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/strains/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSinglePost(data);
      })
      .catch((err) => setErrors(true));
  }, []);
  console.log(singlePost);
  const displayStrainCard = () => {
    return <SingleStrainCard post={singlePost} />;
  };
```

# Demo

https://www.loom.com/share/f65e667c33694271b86d006a0af4976f

# Technologies

- React (React95)
- Rails
- Blender

# Potential For Expansion

- User login/Auth
- Ability to favorite strains
- Track user's ratings for individual strains
- Ability for user to add a new, exciting strain to the database
- Ability to comment on strains to tell others HOW THEY REALLY FEEL about

# Challenges Faced

- Our bootcamp's React curriculum only taught Class components, so we decided to challenge ourselves and dive into Hooks to make our application functional.
- Somewhat related, our Show route on the backend did not have issues, but rendering the page with only one strain, as opposed to all, was a challenge. Using newfound Hooks knowledge, Jo was able to resolve this issue.
- Using the styling library created some issues; certain stylistic flourishes that we would have liked to have added to the pre-built components were unable to be executed. We were still able to get what we wanted accomplished, but sometimes the solution was not as cut and dry as we would have liked.

# Contact

Application made by [Jo Siciliano](https://www.linkedin.com/in/joannsiciliano/), [Alexander Sherwin](https://www.linkedin.com/in/alexander-sherwin/), and [Sam Gold](https://www.linkedin.com/in/samgold57/).
