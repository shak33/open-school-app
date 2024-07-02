#!/bin/bash

GENERATOR_KEY=$1
ROOT_DIR="$( cd "$(dirname "$0")" >/dev/null 2>&1 && pwd )"
API_GENERATOR_PATH="api-generator"
API_NAME="openapi"
API_YAML_PATH="$API_GENERATOR_PATH/$API_NAME.yaml"
TMP_API_PATH="$API_GENERATOR_PATH/tmp"
TMP_API_YAML_PATH="$TMP_API_PATH/$API_NAME.yaml"
DESTINATION_PATH="./src/api/generated"


generate_api_interfaces() {
  cd $ROOT_DIR
  cd ..

  if [ "$TMP_API_PATH" ] ; then
    rm -rf $TMP_API_PATH
  fi
  mkdir -p $TMP_API_PATH
  cp $API_YAML_PATH $TMP_API_PATH
  sed -i "s/.*pattern:.*/#open-api-mocker-unsupported#pattern:/" $TMP_API_YAML_PATH
  if [ -f $TMP_API_YAML_PATH ]; then
      ./node_modules/.bin/openapi-generator-cli generate --generator-key $GENERATOR_KEY
  fi
  rm -rf $TMP_API_YAML_PATH
  convert_to_unix_eol
  copy_api_interfaces
  rm -rf $TMP_API_PATH
  generate_options
}

convert_to_unix_eol() {
  if [ "$OSTYPE" == "msys" ] ; then
    find $TMP_API_PATH -not -path "*/node_modules/*" -type f | xargs realpath | xargs dos2unix
  fi
}

copy_api_interfaces() {
  # shellcheck disable=SC2164
  cd $ROOT_DIR
  cd ..

  cp -r ./$TMP_API_PATH/apis $DESTINATION_PATH
  cp -r ./$TMP_API_PATH/models $DESTINATION_PATH
  cp ./$TMP_API_PATH/api.ts $DESTINATION_PATH
  cp ./$TMP_API_PATH/common.ts $DESTINATION_PATH
  cp ./$TMP_API_PATH/configuration.ts $DESTINATION_PATH
  cp ./$TMP_API_PATH/index.ts $DESTINATION_PATH
  echo -e '\033[1;32m Apis and models have been copied to '$DESTINATION_PATH'.\033[0m'
}


generate_options() {
  echo ---------------------------------------------
  echo -e '\033[1;33m\033[1;33m
  1) Generate API Interfaces
  *) Cancel\033[0m'

  read b
  case $b in
    1) generate_api_interfaces;;
    *) exit;;
  esac
}
generate_options
