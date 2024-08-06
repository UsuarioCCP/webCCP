import React from 'react';
import ImgC from '../../Assets/Images/fondo-redondo-tecnologia.png';

const employees = [
    {
        id: 1,
        name: 'John Doe',
        position: 'CEO',
        dependence: "Presidencia Ejecutiva",
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        extension: '101',
        photo: 'https://img.freepik.com/psd-gratis/anciano-vistiendo-traje-negocios_23-2150833782.jpg?uid=R116120487&ga=GA1.1.463542564.1673042336&semt=ais_user-customized',
      },
      {
        id: 2,
        name: 'Jane Smith',
        position: 'Secretaria',
        dependence: "Presidencia Ejecutiva",
        email: 'jane.smith@example.com',
        phone: '123-456-7891',
        extension: '102',
        photo: 'https://img.freepik.com/foto-gratis/adolescente-guapa-pelo-largo_23-2147611502.jpg?uid=R116120487&ga=GA1.1.463542564.1673042336&semt=ais_user-customized',
      },
      {
        id: 3,
        name: 'Alice Johnson',
        position: 'Jefe',
        dependence: "Gestión financiera",
        email: 'alice.johnson@example.com',
        phone: '123-456-7892',
        extension: '103',
        photo: 'https://img.freepik.com/foto-gratis/retrato-mujer-negocios-oficina_1398-6.jpg?uid=R116120487&ga=GA1.1.463542564.1673042336&semt=ais_user-customized',
      },
      {
        id: 4,
        name: 'Carol White',
        position: 'Auxiliar',
        dependence: "Gestión financiera",
        email: 'carol.white@example.com',
        phone: '123-456-7894',
        extension: '105',
        photo: 'https://img.freepik.com/foto-gratis/hermoso-maquillaje-todos-dias_181624-21819.jpg?uid=R116120487&ga=GA1.1.463542564.1673042336&semt=ais_user-customized',
      },
      {
        id: 5,
        name: 'Bob Brown',
        position: 'Jefe',
        dependence: "Sistemas, Compras e Infraestructura",
        email: 'bob.brown@example.com',
        phone: '123-456-7893',
        extension: '104',
        photo: 'https://img.freepik.com/foto-gratis/oficina-hombre-feliz-trabajo_144627-6324.jpg?uid=R116120487&ga=GA1.1.463542564.1673042336&semt=ais_user-customized',
      },
      {
        id: 6,
        name: 'Louis Green',
        position: 'Auxiliar',
        dependence: "Afiliados, Promoción y Desarrollo",
        email: 'david.green@example.com',
        phone: '123-456-7895',
        extension: '106',
        photo: 'https://img.freepik.com/foto-gratis/hombre-negocios-guapo-vestido-traje-mirando-camara-sonriendo-ampliamente-cara-feliz-pie-sobre-fondo-blanco_141793-54115.jpg?uid=R116120487&ga=GA1.1.463542564.1673042336&semt=ais_user-customized',
      },
      {
        id: 7,
        name: 'Eve Black',
        position: 'Jefe',
        dependence: "Promoción y Desarrollo",
        email: 'eve.black@example.com',
        phone: '123-456-7896',
        extension: '107',
        photo: 'https://img.freepik.com/foto-gratis/mujer-abogado-sonriendo-camara_1101-793.jpg?uid=R116120487&ga=GA1.1.463542564.1673042336&semt=ais_user-customized',
      },
      {
        id: 8,
        name: 'Frank Harris',
        position: 'Head of Sales',
        dependence: "Registros Publicos",
        email: 'frank.harris@example.com',
        phone: '123-456-7897',
        extension: '108',
        photo: 'https://img.freepik.com/foto-gratis/hombre-negocios-guapo-posando-cerca_23-2148336823.jpg?uid=R116120487&ga=GA1.1.463542564.1673042336&semt=ais_user-customized',
      },
      {
        id: 9,
        name: 'Grace Lee',
        position: 'Head of Marketing',
        dependence: "Registros Publicos",
        email: 'grace.lee@example.com',
        phone: '123-456-7898',
        extension: '109',
        photo: 'https://img.freepik.com/foto-gratis/moda-joven-morena-posando_144627-46937.jpg?uid=R116120487&ga=GA1.1.463542564.1673042336&semt=ais_user-customized',
      },
      {
        id: 10,
        name: 'Henry Clark',
        position: 'Head of Development',
        dependence: "Registros Publicos",
        email: 'henry.clark@example.com',
        phone: '123-456-7899',
        extension: '110',
        photo: 'https://img.freepik.com/foto-gratis/hombre-negocios-serio-adulto-que-mira-camara_23-2148113003.jpg?uid=R116120487&ga=GA1.1.463542564.1673042336&semt=ais_user-customized',
      },
      {
        id: 11,
        name: 'Ivy Walker',
        position: 'Head of HR',
        dependence: "Registros Publicos",
        email: 'ivy.walker@example.com',
        phone: '123-456-7900',
        extension: '111',
        photo: 'https://img.freepik.com/foto-gratis/mujer-uso-oficina-mirando-camara_1301-2395.jpg?uid=R116120487&ga=GA1.1.463542564.1673042336&semt=ais_user-customized',
      },
      {
        id: 12,
        name: 'Jack Young',
        position: 'Senior Developer',
        dependence: "Registros Publicos",
        email: 'jack.young@example.com',
        phone: '123-456-7901',
        extension: '112',
        photo: 'https://img.freepik.com/foto-gratis/cierrese-encima-retrato-hombre-barbudo-joven-camisa-blanca-chaqueta-que-presenta-camara-sonrisa-amplia-aislada-sobre-gris_171337-629.jpg?uid=R116120487&ga=GA1.1.463542564.1673042336&semt=ais_user-customized',
      },
      {
        id: 13,
        name: 'Karen Wright',
        position: 'Product Manager',
        dependence: "Registros Publicos",
        email: 'karen.wright@example.com',
        phone: '123-456-7902',
        extension: '113',
        photo: 'https://img.freepik.com/foto-gratis/retrato-interior-hermosa-mujer-pecosa-cabello-oscuro-rizado-viste-camisa-rayas-moda-regocija-dia-libre-aislado-sobre-pared-blanca-mujer-rizada-satisfecha-esta-solo-interior_273609-15765.jpg?uid=R116120487&ga=GA1.1.463542564.1673042336&semt=ais_user-customized',
      },
      {
        id: 14,
        name: 'Larry King',
        position: 'QA Lead',
        dependence: "Registros Publicos",
        email: 'larry.king@example.com',
        phone: '123-456-7903',
        extension: '114',
        photo: 'https://img.freepik.com/foto-gratis/retrato-hombre-inteligente-joven-hapy-vasos-pared-blanca_231208-12206.jpg?uid=R116120487&ga=GA1.1.463542564.1673042336&semt=ais_user-customized',
      },
      {
        id: 15,
        name: 'Mona Adams',
        position: 'UX Designer',
        dependence: "Registros Publicos",
        email: 'mona.adams@example.com',
        phone: '123-456-7904',
        extension: '115',
        photo: 'https://img.freepik.com/foto-gratis/retrato-mujer-rubia-sonriente_23-2148316635.jpg?uid=R116120487&ga=GA1.1.463542564.1673042336&semt=ais_user-customized',
      },
  // Añade más empleados según sea necesario
];

const EmployeeCard = ({ employee }) => {
    return (
      <div className="relative w-60 m-2 justify-self-center">
        {/* <div className="relative card bg-base-100 shadow-xl rounded-lg">
          <figure className="px-4 pt-4">
            <img src={ImgC} alt="" className="relative" />
            <img src={employee.photo} alt={employee.name} className="absolute rounded-full w-24 h-24 object-cover" />
          </figure>
            <div className="col-span-1 card-body items-center text-center p-2">
              <h2 className="card-title text-sm text-gradient-rose">{employee.name}</h2>
              <p className="text-xs font-bold">{employee.position}</p>
              <p className="text-xs font-semibold">{employee.dependence}</p>
              <p className="text-xs">{employee.email}</p>
              <p className="text-xs">{employee.phone} <span>Ext. {employee.extension}</span></p>
            </div>
        </div> */}

        <div className="relative group duration-500 cursor-pointer group overflow-hidden text-gray-50 h-72 w-56 hover:duration-700 border border-orange-300 rounded-2xl">
          <div className="relative card border rounded-none bg-gray-200 shadow-xl text-gray-800">
            <figure className="px-4 pt-2">
              <img src={ImgC} alt="" className="relative" />
              <img src={employee.photo} alt={employee.name} className="absolute rounded-full w-24 h-24 object-cover" />
            </figure>
              <div className="col-span-1 card-body items-center text-center my-5 p-2">
                <h2 className="card-title text-sm text-gradient-rose">{employee.name}</h2>
              </div>
            </div>
            <div className="absolute bg-gray-100 border border-orange-300 rounded-lg -bottom-24 w-56 px-3 pb-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
              <span className="text-gray-800 font-bold text-md my-2">Información</span>
              <span className="text-gray-800 text-xs font-bold">{employee.position}</span>
              <p className="text-gray-800 text-xs font-semibold">{employee.dependence}</p>
              <p className="text-gray-800 text-xs">{employee.email}</p>
              <p className="text-gray-800 text-xs">{employee.phone} <span>Ext. {employee.extension}</span></p>
            </div>
          

        </div>


      </div>
    );
  };
  
  export default EmployeeCard;
  
  
const EmployeDirectory = () => {
  return (
    <div className="grid w-5/6 place-content-around lg:grid-cols-4 md:grid-cols-2 gap-x-2 gap-y-3 m-5">
      {employees.map(employee => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))}
    </div>
  );
};

export {EmployeDirectory};
