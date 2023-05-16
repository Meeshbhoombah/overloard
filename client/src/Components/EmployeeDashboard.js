import { useParams } from 'react-router-dom';

export default function EmployeeDashboard() {
    let { userId } = useParams();

    let getEmployeeData = async() => {
        try {
            let res = await fetch("http://localhost:8080/api/employee/" + userId, {
                method: "GET",
            });   

            let resJson = await res.json();
            console.log(resJson);
        } catch (err) {
            console.error(err);
        }
    }

}

