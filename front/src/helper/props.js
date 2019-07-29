import { get } from 'lodash';

const props = {
    REG_EXP_EMAIL: new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
    getError: (errors, defaultMsg) => (
        get(errors, "response.data[0].message") || defaultMsg
    )
};

export default props;
