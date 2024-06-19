import React, { useContext, useState, ChangeEvent } from "react";
import { AvailabilityContext } from "./availabilityContext";
import pythonLogo from "../Assets/Python.svg";

interface Skill {
  name: string;
  experience: string|number;
  description: string;
}

const SkillsSection: React.FC = () => {
  const {
    skills,
    newSkill,
    setSkills,
    setNewSkill,
    currentIndex,
    setCurrentIndex,
  } = useContext(AvailabilityContext)!;

  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewSkill({ ...newSkill, [name]: value });
  };

  const addSkill = () => {
    if (isEditing) {
      const updatedSkills = [...skills];
      if (currentIndex !== null) {
        updatedSkills[currentIndex] = newSkill;
        setSkills(updatedSkills);
        setIsEditing(false);
        setCurrentIndex(null);
      }
    } else {
      setSkills([...skills, newSkill]);
    }
    setNewSkill({ name: "", experience: "", description: "" });
  };

  const cancelEdit = () => {
    setNewSkill({ name: "", experience: "", description: "" });
    setIsEditing(false);
    setCurrentIndex(null);
  };

  const editSkill = (index: number) => {
    setNewSkill(skills[index]);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  const codingLanguages = [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C#",
    "Ruby",
    "PHP",
  ];

  return (
    <div className="App px-8 py-6 px-4 bg-[#1f1f1f] rounded-md">
      <h2 className="mb-4">Top skills:</h2>
      <ul>
        {skills.map((skill: Skill, index: number) => (
          <li
            key={index}
            className="flex justify-between items-center border border-gray-400 px-2 rounded-md"
          >
            {skill.name} ({skill.experience})
            <button onClick={() => editSkill(index)}>Edit</button>
          </li>
        ))}
      </ul>
      <h2 className="mt-[12px]">{isEditing ? "Edit" : "Add"} a skill</h2>
      <div>
        <div className="flex gap-5">
          <select
            name="name"
            value={newSkill.name}
            onChange={handleInputChange}
            className="w-[80%] bg-[#1f1f1f]  border border-gray-400 px-2 py-2 rounded-md"
          >
            {codingLanguages.map((language, index) => (
              <option
                className="bg-transparent"
                key={index}
                value={language}
              >
                {language}
              </option>
            ))}
          </select>
          <input
            type="text"
            name="experience"
            value={newSkill.experience}
            onChange={handleInputChange}
            placeholder="Skill name"
            className="w-[20%] bg-transparent border border-gray-400 px-2 py-2 rounded-md"
          />
        </div>
        <textarea
          name="description"
          value={newSkill.description}
          onChange={handleInputChange}
          placeholder="Describe your experience"
          className="bg-transparent w-[100%] border border-gray-400 rounded-md px-2 py-2"
        />
        <div className="flex gap-4">
          <button onClick={cancelEdit}>Cancel</button>
          <button onClick={addSkill}>{isEditing ? "Update" : "Add"}</button>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
