import { Label } from './Styles';

const DarkMode = () => {
  const onClickDarkMode = (e) => {
    //현재 OS모드 상태
    const currentmode = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;

    //기본 OS라이트모드 상태 && 체크 상태
    if (!currentmode && e.target.checked) {
      document.querySelector('body').className = 'dark';
    } else if (!currentmode && !e.target.checked) {
      document.querySelector('body').className = 'light';
    }

    //기본 OS다크모드 상태일 때 && 체크 상태
    if (currentmode && e.target.checked) {
      document.querySelector('body').className = 'light';
    } else if (currentmode && !e.target.checked) {
      document.querySelector('body').className = 'dark';
    }
  };

  return (
    <Label>
      <input type="checkbox" onClick={onClickDarkMode} />
      <span className="onoff-switch" />
    </Label>
  );
};

export default DarkMode;
