/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/* This file was auto-generated by ensureUiComponents() in @jupyterlab/buildutils */

import { JLIcon } from './jlicon';
import { Icon } from './interfaces';

// icon svg import statements
import consoleSvg from '../../style/icons/filetype/console.svg';
import fileSvg from '../../style/icons/filetype/file.svg';
import folderSvg from '../../style/icons/filetype/folder.svg';
import html5Svg from '../../style/icons/filetype/html5.svg';
import imageSvg from '../../style/icons/filetype/image.svg';
import jsonSvg from '../../style/icons/filetype/json.svg';
import keyboardSvg from '../../style/icons/filetype/keyboard.svg';
import launcherSvg from '../../style/icons/filetype/launcher.svg';
import markdownSvg from '../../style/icons/filetype/markdown.svg';
import notebookSvg from '../../style/icons/filetype/notebook.svg';
import pythonSvg from '../../style/icons/filetype/python.svg';
import rKernelSvg from '../../style/icons/filetype/r-kernel.svg';
import reactSvg from '../../style/icons/filetype/react.svg';
import settingsSvg from '../../style/icons/filetype/settings.svg';
import spreadsheetSvg from '../../style/icons/filetype/spreadsheet.svg';
import textEditorSvg from '../../style/icons/filetype/text-editor.svg';
import vegaSvg from '../../style/icons/filetype/vega.svg';
import yamlSvg from '../../style/icons/filetype/yaml.svg';
import jupyterFaviconSvg from '../../style/icons/jupyter/jupyter-favicon.svg';
import jupyterSvg from '../../style/icons/jupyter/jupyter.svg';
import buildSvg from '../../style/icons/sidebar/build.svg';
import extensionSvg from '../../style/icons/sidebar/extension.svg';
import paletteSvg from '../../style/icons/sidebar/palette.svg';
import runningSvg from '../../style/icons/sidebar/running.svg';
import tabSvg from '../../style/icons/sidebar/tab.svg';
import kernelSvg from '../../style/icons/statusbar/kernel.svg';
import lineFormSvg from '../../style/icons/statusbar/line-form.svg';
import listSvg from '../../style/icons/statusbar/list.svg';
import notTrustedSvg from '../../style/icons/statusbar/not-trusted.svg';
import terminalSvg from '../../style/icons/statusbar/terminal.svg';
import trustedSvg from '../../style/icons/statusbar/trusted.svg';
import addSvg from '../../style/icons/toolbar/add.svg';
import checkSvg from '../../style/icons/toolbar/check.svg';
import copySvg from '../../style/icons/toolbar/copy.svg';
import cutSvg from '../../style/icons/toolbar/cut.svg';
import fileUploadSvg from '../../style/icons/toolbar/file-upload.svg';
import filterListSvg from '../../style/icons/toolbar/filter-list.svg';
import newFolderSvg from '../../style/icons/toolbar/new-folder.svg';
import pasteSvg from '../../style/icons/toolbar/paste.svg';
import refreshSvg from '../../style/icons/toolbar/refresh.svg';
import runSvg from '../../style/icons/toolbar/run.svg';
import saveSvg from '../../style/icons/toolbar/save.svg';
import searchSvg from '../../style/icons/toolbar/search.svg';
import stopSvg from '../../style/icons/toolbar/stop.svg';

// defaultIcons definition
export namespace IconImports {
  export const defaultIcons: ReadonlyArray<Icon.IModel> = [
    { name: 'console', svg: consoleSvg },
    { name: 'file', svg: fileSvg },
    { name: 'folder', svg: folderSvg },
    { name: 'html5', svg: html5Svg },
    { name: 'image', svg: imageSvg },
    { name: 'json', svg: jsonSvg },
    { name: 'keyboard', svg: keyboardSvg },
    { name: 'launcher', svg: launcherSvg },
    { name: 'markdown', svg: markdownSvg },
    { name: 'notebook', svg: notebookSvg },
    { name: 'python', svg: pythonSvg },
    { name: 'r-kernel', svg: rKernelSvg },
    { name: 'react', svg: reactSvg },
    { name: 'settings', svg: settingsSvg },
    { name: 'spreadsheet', svg: spreadsheetSvg },
    { name: 'text-editor', svg: textEditorSvg },
    { name: 'vega', svg: vegaSvg },
    { name: 'yaml', svg: yamlSvg },
    { name: 'jupyter-favicon', svg: jupyterFaviconSvg },
    { name: 'jupyter', svg: jupyterSvg },
    { name: 'build', svg: buildSvg },
    { name: 'extension', svg: extensionSvg },
    { name: 'palette', svg: paletteSvg },
    { name: 'running', svg: runningSvg },
    { name: 'tab', svg: tabSvg },
    { name: 'kernel', svg: kernelSvg },
    { name: 'line-form', svg: lineFormSvg },
    { name: 'list', svg: listSvg },
    { name: 'not-trusted', svg: notTrustedSvg },
    { name: 'terminal', svg: terminalSvg },
    { name: 'trusted', svg: trustedSvg },
    { name: 'add', svg: addSvg },
    { name: 'check', svg: checkSvg },
    { name: 'copy', svg: copySvg },
    { name: 'cut', svg: cutSvg },
    { name: 'file-upload', svg: fileUploadSvg },
    { name: 'filter-list', svg: filterListSvg },
    { name: 'new-folder', svg: newFolderSvg },
    { name: 'paste', svg: pasteSvg },
    { name: 'refresh', svg: refreshSvg },
    { name: 'run', svg: runSvg },
    { name: 'save', svg: saveSvg },
    { name: 'search', svg: searchSvg },
    { name: 'stop', svg: stopSvg }
  ];
}

// wrapped icon definitions
export const consoleIcon = new JLIcon({ name: 'consoleIcon', svgstr: consoleSvg });
export const fileIcon = new JLIcon({ name: 'fileIcon', svgstr: fileSvg });
export const folderIcon = new JLIcon({ name: 'folderIcon', svgstr: folderSvg });
export const html5Icon = new JLIcon({ name: 'html5Icon', svgstr: html5Svg });
export const imageIcon = new JLIcon({ name: 'imageIcon', svgstr: imageSvg });
export const jsonIcon = new JLIcon({ name: 'jsonIcon', svgstr: jsonSvg });
export const keyboardIcon = new JLIcon({ name: 'keyboardIcon', svgstr: keyboardSvg });
export const launcherIcon = new JLIcon({ name: 'launcherIcon', svgstr: launcherSvg });
export const markdownIcon = new JLIcon({ name: 'markdownIcon', svgstr: markdownSvg });
export const notebookIcon = new JLIcon({ name: 'notebookIcon', svgstr: notebookSvg });
export const pythonIcon = new JLIcon({ name: 'pythonIcon', svgstr: pythonSvg });
export const rKernelIcon = new JLIcon({ name: 'rKernelIcon', svgstr: rKernelSvg });
export const reactIcon = new JLIcon({ name: 'reactIcon', svgstr: reactSvg });
export const settingsIcon = new JLIcon({ name: 'settingsIcon', svgstr: settingsSvg });
export const spreadsheetIcon = new JLIcon({ name: 'spreadsheetIcon', svgstr: spreadsheetSvg });
export const textEditorIcon = new JLIcon({ name: 'textEditorIcon', svgstr: textEditorSvg });
export const vegaIcon = new JLIcon({ name: 'vegaIcon', svgstr: vegaSvg });
export const yamlIcon = new JLIcon({ name: 'yamlIcon', svgstr: yamlSvg });
export const jupyterFaviconIcon = new JLIcon({ name: 'jupyterFaviconIcon', svgstr: jupyterFaviconSvg });
export const jupyterIcon = new JLIcon({ name: 'jupyterIcon', svgstr: jupyterSvg });
export const buildIcon = new JLIcon({ name: 'buildIcon', svgstr: buildSvg });
export const extensionIcon = new JLIcon({ name: 'extensionIcon', svgstr: extensionSvg });
export const paletteIcon = new JLIcon({ name: 'paletteIcon', svgstr: paletteSvg });
export const runningIcon = new JLIcon({ name: 'runningIcon', svgstr: runningSvg });
export const tabIcon = new JLIcon({ name: 'tabIcon', svgstr: tabSvg });
export const kernelIcon = new JLIcon({ name: 'kernelIcon', svgstr: kernelSvg });
export const lineFormIcon = new JLIcon({ name: 'lineFormIcon', svgstr: lineFormSvg });
export const listIcon = new JLIcon({ name: 'listIcon', svgstr: listSvg });
export const notTrustedIcon = new JLIcon({ name: 'notTrustedIcon', svgstr: notTrustedSvg });
export const terminalIcon = new JLIcon({ name: 'terminalIcon', svgstr: terminalSvg });
export const trustedIcon = new JLIcon({ name: 'trustedIcon', svgstr: trustedSvg });
export const addIcon = new JLIcon({ name: 'addIcon', svgstr: addSvg });
export const checkIcon = new JLIcon({ name: 'checkIcon', svgstr: checkSvg });
export const copyIcon = new JLIcon({ name: 'copyIcon', svgstr: copySvg });
export const cutIcon = new JLIcon({ name: 'cutIcon', svgstr: cutSvg });
export const fileUploadIcon = new JLIcon({ name: 'fileUploadIcon', svgstr: fileUploadSvg });
export const filterListIcon = new JLIcon({ name: 'filterListIcon', svgstr: filterListSvg });
export const newFolderIcon = new JLIcon({ name: 'newFolderIcon', svgstr: newFolderSvg });
export const pasteIcon = new JLIcon({ name: 'pasteIcon', svgstr: pasteSvg });
export const refreshIcon = new JLIcon({ name: 'refreshIcon', svgstr: refreshSvg });
export const runIcon = new JLIcon({ name: 'runIcon', svgstr: runSvg });
export const saveIcon = new JLIcon({ name: 'saveIcon', svgstr: saveSvg });
export const searchIcon = new JLIcon({ name: 'searchIcon', svgstr: searchSvg });
export const stopIcon = new JLIcon({ name: 'stopIcon', svgstr: stopSvg });
