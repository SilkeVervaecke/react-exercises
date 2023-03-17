import { atom, selector} from 'recoil';
const userState = atom({
    key: 'userName',
    default: 'X'
})

const nameCounterState = selector({
    key: 'nameCounterState',
    get: ({get}) => {
      const name = get(userState);
  
      return name.length;
    },
  });
  
export default userState;