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
    <div className="p-6 md:max-w-2xl mx-auto">
      {resources.map((course, rowId) => (
        <section key={rowId} className="mb-4">
          <h3 className="text-2xl font-semibold">{course.course}</h3>
          <ul className="text-xl list-disc list-inside">
            {course.resources.map((resource, rowId) => (
              <li key={rowId}>
                <a
                  href={resource.link}
                  className="text-lg text-blue-500 hover:underline"
                >
                  {resource.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
