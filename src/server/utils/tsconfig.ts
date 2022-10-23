/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import * as Proto from '../protocol'
import { TypeScriptServiceConfiguration } from './configuration'

export function inferredProjectConfig(
  config: TypeScriptServiceConfiguration
): Proto.ExternalProjectCompilerOptions {
  const base: Proto.ExternalProjectCompilerOptions = {
    module: 'ESNext' as Proto.ModuleKind,
	moduleResolution: 'Node' as Proto.ModuleResolutionKind,
    target: 'ES2020' as Proto.ScriptTarget,
    jsx: 'react' as Proto.JsxEmit
  }

  if (config.checkJs) {
    base.checkJs = true
  }

  if (config.experimentalDecorators) {
    base.experimentalDecorators = true
  }

  return base
}
