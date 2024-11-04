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
    <>
      <div class="p-6 md:max-w-2xl mx-auto">
        <h2 class="text-2xl font-bold mb-4">Courses</h2>

        <div class="mb-6">
          <h3 class="text-xl font-semibold">Mathematics</h3>
          <ul class="text-lg list-disc list-inside">
            <li>
              <a
                href="https://drive.google.com/file/d/1MeRf99PHAqrl2ntOTYjMJj21q5e1zLhM/view?usp=sharing"
                class="text-blue-500 hover:underline"
              >
                Module 1
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1MeRf99PHAqrl2ntOTYjMJj21q5e1zLhM/view?usp=sharing"
                class="text-blue-500 hover:underline"
              >
                Module 2
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-xl font-semibold">Chemistry</h3>
          <ul class="text-lg list-disc list-inside">
            <li>
              <a
                href="https://drive.google.com/file/d/1MeRf99PHAqrl2ntOTYjMJj21q5e1zLhM/view?usp=sharing"
                class="text-blue-500 hover:underline"
              >
                Laboratory 1
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="w-1/2 mx-auto py-8 max-w-10xl border border-gray-500">
        {resources.map((course, rowId) => {
          return (
            <>
              <h2 key={rowId} className="text-3xl">
                {course.course}
              </h2>
              <div className="flex flex-wrap justify-center items-center gap-12 max-w-[1400px] mx-auto p-5 px-2.5">
                {course.resources.map((resource, rowId) => (
                  <p
                    key={rowId}
                    className="w-full max-w-[350px] h-[150px] object-cover rounded-[10px] border bg-black"
                  >
                    foo
                  </p>
                ))}
              </div>
            </>
          );
        })}
      </div> */}
    </>
    // <ul>
    //   {resources.map((course, rowId) => {
    //     return (
    //       <li key={rowId}>
    //         {course.course}
    //         <ul>
    //           {course.resources.map((resource, rowId) => (
    //             <li key={rowId}>
    //               <a href={resource.link} target="_blank">
    //                 {resource.name}
    //               </a>
    //             </li>
    //           ))}
    //         </ul>
    //       </li>
    //     );
    //   })}
    // </ul>
  );
}
