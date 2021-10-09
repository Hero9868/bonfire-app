let ExtensionHooks = {};

// TODO: make this more configurable? ie. don't import disabled extensions

import { InputSelectHooks } from "./../../../assets/js/input_select"
import { GeolocateHooks } from "./../../../deps/bonfire_geolocate/assets/js/extension"
import { KanbanHooks } from "./../../../deps/bonfire_ui_kanban/assets/js/extension"

Object.assign(ExtensionHooks, InputSelectHooks, GeolocateHooks, KanbanHooks)

export { ExtensionHooks }