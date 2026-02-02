import { type ReactNode } from 'react';

const ClassActivity = ({ children }: { children: ReactNode }) => {
    return (
        <div className="classroom-activity">
            <h3 className='classroom-activity__title'>Classroom Activity</h3>
            {children}
        </div>
    )
}

export default ClassActivity;