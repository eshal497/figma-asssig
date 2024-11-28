
// src/components/CourseCategories.js
import React from 'react';

const categories = [
  { name: 'Design & Development', courses: '50+ Courses Available', icon: '👨‍💻' },
  { name: 'Marketing', courses: '50+ Courses Available', icon: '📢' },
  { name: 'Development', courses: '50+ Courses Available', icon: '🔄' },
  { name: 'Communication', courses: '50+ Courses Available', icon: '💬' },
  { name: 'Digital Marketing', courses: '50+ Courses Available', icon: '🌐' },
  { name: 'Self Development', courses: '50+ Courses Available', icon: '✨' },
  { name: 'Business', courses: '50+ Courses Available', icon: '💼' },
  { name: 'Finance', courses: '50+ Courses Available', icon: '📊' },
  { name: 'Consulting', courses: '50+ Courses Available', icon: '📄' },
];

function CourseCategories() {
  return (
    <div className="flex flex-col items-center py-8 px-4">
      <h2 className="text-3xl font-bold mb-2 text-center">Explore Courses By Category</h2>
      <p className="text-gray-500 mb-8 text-center max-w-md">
        Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`p-6 border rounded-lg text-center flex flex-col items-center ${
              category.name === 'Consulting' ? 'border-green-500' : 'border-gray-200'
            }`}
          >
            <div className="text-4xl mb-4">{category.icon}</div>
            <h3 className="text-lg font-semibold">{category.name}</h3>
            <p className="text-gray-500">{category.courses}</p>
          </div>
        ))}
      </div>

      <button className="mt-8 px-6 py-2 border rounded text-gray-700 hover:bg-gray-100">
        View All Courses
      </button>
    </div>
  );
}

export default CourseCategories;
