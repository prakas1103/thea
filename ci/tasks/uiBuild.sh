#!/bin/bash

echo "Started ng build --prod and copy to static"
uiPath=/Users/m_868065/IdeaProjects/thea/WebUI/ui
resourcesPath=/Users/m_868065/IdeaProjects/thea/src/main/resources

cd $uiPath
npm install

ng build --prod

DIR=$resourcesPath/static
if [ -d "$DIR" ]; then
  ### Take action if $DIR exists ###
  echo "Delete static folder"
  rm -rf $resourcesPath/static
  ls -larht $resourcesPath
fi
echo "Create static folder"
mkdir $resourcesPath/static
cp -R $uiPath/dist/ui/* $resourcesPath/static
ls -larht $resourcesPath/static

