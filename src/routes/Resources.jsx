import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  const res = await fetch("/resources");
  // return await res.json();
  return [
    {
      course: "Biology",
      resources: [
        {
          name: "Module 1",
          link: "https://drive.google.com/file/d/1MeRf99PHAqrl2ntOTYjMJj21q5e1zLhM/view?usp=sharing",
        },
        {
          name: "Module 2",
          link: "https://drive.google.com/file/d/1MeRf99PHAqrl2ntOTYjMJj21q5e1zLhM/view?usp=sharing",
        },
      ],
    },
    {
      course: "Chemistry",
      resources: [
        {
          name: "Laboratory 1",
          link: "https://drive.google.com/file/d/1MeRf99PHAqrl2ntOTYjMJj21q5e1zLhM/view?usp=sharing",
        },
      ],
    },
  ];
};

export default function Resources() {
  const resources = useLoaderData();
  return (
    <ul>
      {resources.map((course, rowId) => {
        return (
          <li key={rowId}>
            {course.course}
            <ul>
              {course.resources.map((resource, rowId) => (
                <li key={rowId}>
                  <a href={resource.link} target="_blank">
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}
