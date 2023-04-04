var documenterSearchIndex = {"docs":
[{"location":"#Abstract-types","page":"Home","title":"Abstract types","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Modules = [CommonDataModel]","category":"page"},{"location":"#CommonDataModel.AbstractDataset","page":"Home","title":"CommonDataModel.AbstractDataset","text":"AbstractDataset is a collection of multidimensional variables (for example a NetCDF or GRIB file)\n\nA data set ds of a type derived from AbstractDataset should implemented at minimum:\n\nBase.key(ds): return a list of variable names a strings\nBase.getindex(ds,varname::String): return an array-like data structure (derived from AbstractVariable) of the variables corresponding to varname. This array-like data structure should follow the CF semantics.\nds.attrib: should be a Dict-like data structure with all global attribute names as keys and the corresponding value\nds.dim: should be a Dict-like data structure with all dimension names as keys and the corresponding length\n\n\n\n\n\n","category":"type"},{"location":"#CommonDataModel.AbstractVariable","page":"Home","title":"CommonDataModel.AbstractVariable","text":"AbstractVariable{T,N} is a subclass of AbstractArray{T, N}. A variable v of a type derived from AbstractVariable should implement:\n\nv.attrib: should be a Dict-like data structure with all variable attribute names as keys and the corresponding value\nname(v): should be the name of variable within the dataset\ndimnames(v): should be a iterable data structure with all dimension names\n\n\n\n\n\n","category":"type"},{"location":"#CommonDataModel.dimnames-Tuple{CommonDataModel.AbstractVariable}","page":"Home","title":"CommonDataModel.dimnames","text":"CommonDatamodel.dimnames(v::AbstractVariable)\n\nReturn an iterable of the dimension names of the variable v.\n\n\n\n\n\n","category":"method"},{"location":"#CommonDataModel.group-Tuple{CommonDataModel.AbstractDataset, AbstractString}","page":"Home","title":"CommonDataModel.group","text":"CommonDatamodel.group(ds::AbstractDataset,groupname::AbstractString)\n\nReturn the sub-group data set with the name groupname.\n\n\n\n\n\n","category":"method"},{"location":"#CommonDataModel.groupname-Tuple{CommonDataModel.AbstractDataset}","page":"Home","title":"CommonDataModel.groupname","text":"CommonDatamodel.groupname(ds::AbstractDataset)\n\nName of the group of the data set ds. For a data set containing only a single group, this will be always the root group \"/\".\n\n\n\n\n\n","category":"method"},{"location":"#CommonDataModel.groups-Tuple{CommonDataModel.AbstractDataset}","page":"Home","title":"CommonDataModel.groups","text":"CommonDatamodel.groups(ds::AbstractDataset)\n\nAll the group names of the data set. For a data set containing only a single group, this will be an empty vector of String.\n\n\n\n\n\n","category":"method"},{"location":"#CommonDataModel.name-Tuple{CommonDataModel.AbstractVariable}","page":"Home","title":"CommonDataModel.name","text":"CommonDatamodel.name(v::AbstractVariable)\n\nReturn the name of the variable v as a string.\n\n\n\n\n\n","category":"method"},{"location":"#CommonDataModel.path-Tuple{CommonDataModel.AbstractDataset}","page":"Home","title":"CommonDataModel.path","text":"CommonDatamodel.path(ds::AbstractDataset)\n\nFile path of the data set ds.\n\n\n\n\n\n","category":"method"},{"location":"#CommonDataModel.set_attribute_color-Tuple{Symbol}","page":"Home","title":"CommonDataModel.set_attribute_color","text":"    CommonDataModel.set_attribute_color(color::Symbol)\n\nSet the attribute color. The default color is cyan.\n\n\n\n\n\n","category":"method"},{"location":"#CommonDataModel.set_section_color-Tuple{Symbol}","page":"Home","title":"CommonDataModel.set_section_color","text":"    CommonDataModel.set_section_color(color::Symbol)\n\nSet the section color. The default color is red.\n\n\n\n\n\n","category":"method"},{"location":"#CommonDataModel.set_variable_color-Tuple{Symbol}","page":"Home","title":"CommonDataModel.set_variable_color","text":"    CommonDataModel.set_variable_color(color::Symbol)\n\nSet the variable color. The default color is green.\n\n\n\n\n\n","category":"method"},{"location":"#CommonDataModel.show_attrib-Tuple{Any, Any}","page":"Home","title":"CommonDataModel.show_attrib","text":"CommonDatamodel.show_attrib(io,a)\n\nPrint a list all attributes (key/values pairs) in a to IO stream io. The IO property :level is used for indentation.\n\n\n\n\n\n","category":"method"},{"location":"#CommonDataModel.show_dim-Tuple{IO, Any}","page":"Home","title":"CommonDataModel.show_dim","text":"CommonDatamodel.show_dim(io,dim)\n\nPrint a list all dimensions (key/values pairs where key is the dimension names and value the corresponding length) in dim to IO stream io. The IO property :level is used for indentation.\n\n\n\n\n\n","category":"method"},{"location":"#CommonDataModel.unlimited-Tuple{CommonDataModel.AbstractDataset}","page":"Home","title":"CommonDataModel.unlimited","text":"CommonDatamodel.unlimited(ds::AbstractDataset)\n\nIterator of strings with the name of the unlimited dimension.\n\n\n\n\n\n","category":"method"}]
}
