import React from 'react';

import ProjectCardApi from './projectsCards/ProjectCardApi';

export default function Projects() {
    return (
        <>
            <div className="card ">

                <div className="card-header shadow">
                    Projects<a href='/' ><i className="text-dark text-white fa-solid fa-ellipsis-vertical"></i></a>
                </div>

                <div className="card-body my-2">
                    <ProjectCardApi />
                </div>

            </div>
        </>
    )
}
