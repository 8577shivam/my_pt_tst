import React, { useState, useContext } from 'react';
import { AvailabilityContext } from './availabilityContext';
interface AvailabilityContextInterface{
  status:string|undefined,
  setStatus:()=>void,
  availability:string,
  setAvailability:()=>void,
}
const AvailbilitySection = () => {
  const { status, setStatus, availability, setAvailability } = useContext(AvailabilityContext)!;
  return (
    <div className="py-6 px-4 bg-[#1f1f1f] rounded-md">
      <h2 className="mb-4">Availability</h2>
      <div className="availability-options">
        <div className="flex items-center bg-[#2d2d2d] py-3 px-3 rounded-md ">
          <input
            type="radio"
            id="active"
            name="status"
            value="Actively looking for a job"
            checked={status === "Actively looking for a job"}
            onChange={() => setStatus("Actively looking for a job")}
          />
          <label htmlFor="active">Actively looking for a job</label>
        </div>
        {status === "Actively looking for a job" && (
          <div className="availability-slider">
            <label htmlFor="availability" className="flex justify-between">
              <span>Your availability</span> <span>{availability}</span>
            </label>
            <input
              type="range"
              id="availability"
              name="availability"
              min="1"
              max="12"
              value={availability.split(" ")[0]}
              onChange={(e) =>
                setAvailability(
                  `${e.target.value} month${
                    Number(e.target.value) > 1 ? "s" : ""
                  }`
                )
              }
            />
          </div>
        )}

        <div className="flex items-center bg-[#2d2d2d] py-3 px-3 rounded-md">
          <input
            type="radio"
            id="open"
            name="status"
            value="I'm open to opportunities"
            checked={status === "I'm open to opportunities"}
            onChange={() => setStatus("I'm open to opportunities")}
          />
          <label htmlFor="open">I'm open to opportunities</label>
        </div>
        <div className="flex items-center bg-[#2d2d2d] py-3 px-3 rounded-md">
          <input
            type="radio"
            id="exploring"
            name="status"
            value="Not sure, I'm just exploring"
            checked={status === "Not sure, I'm just exploring"}
            onChange={() => setStatus("Not sure, I'm just exploring")}
          />
          <label htmlFor="exploring">Not sure, I'm just exploring</label>
        </div>
      </div>

      {/* <div className="availability-navigation">
        <button className="previous">Previous</button>
        <button className="next">Next</button>
      </div> */}
    </div>
  );
};

export default AvailbilitySection;