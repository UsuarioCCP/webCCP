import { LayoutGeneral } from "../../../Layouts/LayoutGeneral";
import { EmployeDirectory } from "../../../Componentes/EmployeDirectory";

const Employee = () => {
    return(
        <LayoutGeneral>
            <div className="grid justify-items-center">
                <EmployeDirectory />
            </div>
        </LayoutGeneral>
    )
}

export {Employee};