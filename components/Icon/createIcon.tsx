import Icon from './LocalIcon';

export interface CreateIconProps {
  scriptUrl: string;
}

const setMap = new Set();

const createIcon = (scriptUrl: string) => {
  if (!setMap.has(scriptUrl)) {
    const svgDom = document.createElement('script');

    svgDom.setAttribute('src', scriptUrl);

    document.body.appendChild(svgDom);

    setMap.add(scriptUrl);
  }

  return Icon;
};

export default createIcon;
