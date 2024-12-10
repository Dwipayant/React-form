import React, { useState } from 'react'
import Select from "react-select";
const options = [
    { value: "React", label: "React" },
    { value: "Vue", label: "Vue" },
    { value: "Angular", label: "Angular" },
    { value: "Java", label: "Java" }
];
const ControlledForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        empType: '',
        skills: [],
        email: '',
        remark: '',
        checkedSkills: [],
        selectedSkill: ''
    })
    const handleSelected = (event) => {
        //const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, skills: event }));
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleChecked = (event) => {
        const { name, checked, value } = event.target
        setFormData((prevFormData) => ({ ...prevFormData, [name]: { ...prevFormData.checkedSkills, [value]: checked } }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData)
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text"
                        name='name'
                        className="form-control"
                        id="name"
                        value={formData.name}
                        placeholder="jhon" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Email address</label>
                    <input type="email"
                        name='email'
                        className="form-control"
                        id="exampleFormControlInput1"
                        value={formData.email}
                        placeholder="name@example.com" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Employee Type</label>
                    <select className="form-control" id="exampleFormControlSelect1" name='empType' onChange={handleChange}>
                        <option >Permanent</option>
                        <option>Contractor</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect2">Skills</label>
                    <Select
                        defaultValue={formData.skills}
                        onChange={handleSelected}
                        options={options}
                        closeMenuOnSelect={false}
                        isMulti
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Remarks</label>
                    <textarea className="form-control" name='remark' id="exampleFormControlTextarea1" rows="3" onChange={handleChange}></textarea>
                </div>
                {/* <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">Upload Profile Pic</label>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                </div> */}
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value='Angular'
                        // checked={formData?.checkedSkills.includes('Angular')}
                        name='checkedSkills'
                        onChange={handleChecked} />
                    <label className="form-check-label" htmlFor="inlineCheckbox1">Angular</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        value="React"
                        // checked={formData?.checkedSkills?.includes('React')}
                        name='checkedSkills'
                        onChange={handleChecked} />
                    <label className="form-check-label" htmlFor="inlineCheckbox2">React</label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox3"
                        value="Vue"
                        // checked={formData?.checkedSkills?.includes('Vue')}
                        name='checkedSkills'
                        onChange={handleChecked} />
                    <label className="form-check-label" htmlFor="inlineCheckbox3">Vue</label>
                </div>
                <div className="form-check form-check-inline">
                    <input onChange={handleChange}
                        className="form-check-input"
                        type="radio"
                        name="selectedSkills"
                        id="inlineRadio1"
                        value="Angular" />
                    <label className="form-check-label" htmlFor="inlineRadio1">Angular</label>
                </div>
                <div className="form-check form-check-inline">
                    <input onChange={handleChange}
                        className="form-check-input"
                        type="radio"
                        name="selectedSkills"
                        id="inlineRadio2"
                        value="React" />
                    <label className="form-check-label" htmlFor="inlineRadio2">React</label>
                </div>
                <div className="form-check form-check-inline">
                    <input onChange={handleChange}
                        className="form-check-input"
                        type="radio"
                        name="selectedSkills"
                        id="inlineRadio3"
                        value="Vue" />
                    <label className="form-check-label" htmlFor="inlineRadio3">Vue</label>
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-2">Submit</button>
                </div>
            </form>
        </>
    )
}

export default ControlledForm
