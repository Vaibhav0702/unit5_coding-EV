import { useState } from "react";
import './form.css';

export const AddStudent = () => {

    const [students, setStudents] = useState({

        "first_name": "",
        "last_name": "",
        "email": "",
        "gender": "",
        "age": "",
        "tenth_score": "",
        "twelth_score": "",
        "preferred_branch": "",

    });

    const handleChange = (e) => {

        setStudents({
            ...students,
            [e.target.id]: e.target.value,
        });

    };

    const handleSubmit = (e) => {

        e.preventDefault(e);

        console.log(students);

        fetch("http://localhost:8080/students", {

            method: "POST",
            body: JSON.stringify(students),
            headers: { "Content-Type": "application/json" }

        });
    };

    return (
        <form className="addstudent" onSubmit={handleSubmit}>
            <div>
                Firstname:{" "}
                <input
                    onChange={handleChange}
                    type="text"
                    id="first_name"
                    className="first_name"
                    placeholder="enter first name"
                />
            </div>
            <div>
                {" "}
                Last Name:
                <input
                    onChange={handleChange}
                    type="text"
                    id="last_name"
                    className="last_name"
                    placeholder="enter last name"

                />
            </div>
            <div>
                {" "}
                Email:
                <input
                    onChange={handleChange}
                    type="email"
                     id="email"
                    className="email"
                    placeholder="enter email"

                />
            </div>

            <div>
                Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
                <div>
                    Male
                    <input
                        onChange={handleChange}
                        id="gender"
                        className="male"
                        type="radio"
                        value={"male"}

                    />{" "}
                    Female{" "}
                    <input
                        onChange={handleChange}
                        id="gender"
                        className="female"
                        type="radio"
                        value={"female"}

                    />
                </div>
            </div>
            <div>
                Age{" "}
                <input
                    onChange={handleChange}
                    type="number"
                    id="age"
                    className="age"
                    placeholder="enter age"

                />
            </div>
            <div>
                Tenth Score:{" "}
                <input
                    onChange={handleChange}
                    type="number"
                    id="tenth_score"
                    className="tenth_score"
                    placeholder="enter 10th score"

                />{" "}
            </div>
            <div>
                Twelth Score:{" "}
                <input
                    onChange={handleChange}
                    type="number"
                    id="twelth_score"
                    className="twelth_score"
                    placeholder="enter 12th score"

                />{" "}
            </div>
            <div>
                <select
                  onChange={handleChange}
                    value={students.preferred_branch} // select dropdown needs both value and onChange attributes
                    id="preferred_branch"
                    className="preferred_branch"
                         
                >
                    <option value="law">law</option>
                    <option value="commerce">commerce</option>
                    <option value="science">science</option>
                    <option value="sports">sports</option>
                    <option value="arts">arts</option>
                    <option value="acting">acting</option>
                </select>
            </div>

            <input className="submit" type="submit" value="Submit" />
            {
                // <div className="error"></div>
                // show this div with proper error before submitting form, if there's anything not provided
                // eg: first name missing, age cannot be greater than 100 etc
            }
        </form>
    );
};