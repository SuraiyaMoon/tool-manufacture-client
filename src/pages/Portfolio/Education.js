import React from 'react';

const Education = () => {
    return (
        <div>
            <p>Education:</p>

            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Educational level</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th>1</th>
                            <td>SSC</td>
                            <td>2018</td>

                        </tr>

                        <tr>
                            <th>2</th>
                            <td>HSC</td>
                            <td>2020</td>

                        </tr>

                        <tr>
                            <th>3</th>
                            <td>Honours in Mathematics</td>
                            <td>2021-(running)</td>

                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Education;