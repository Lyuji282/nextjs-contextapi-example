export const CountUp = ({dispatch}) => {

    const action = {
        type: 'ADD',
        value: 2
    };

    dispatch({...action});
};