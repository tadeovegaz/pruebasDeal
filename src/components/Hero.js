import React from 'react'

const Hero = () => {
  return (
    <>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_480x270/public/media/image/2022/03/gizmo-gremlins-2649887.jpg?itok=viDlLgyc" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-5xl font-bold">Tadeo Vega</h1>
                <p className="py-6">Esta es mi pagina para hacer pruebas del uso de Tailwind CSS y DaisyUI.</p>
                <button className="btn btn-primary">Ejemplos</button>
                </div>
            </div>
        </div>
    </>
  );
}

export default Hero