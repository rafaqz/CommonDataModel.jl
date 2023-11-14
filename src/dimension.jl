
"""
    CommonDatamodel.dimnames(ds::AbstractDataset)

Return an iterable of all dimension names in `ds`. This
information can also be accessed using the property `ds.dim`:

# Examples

```julia
ds = NCDataset("results.nc", "r");
dimnames = keys(ds.dim)
```
"""
dimnames(ds::Union{AbstractDataset,AbstractVariable}) = ()


"""
    CommonDatamodel.dim(ds::AbstractDataset,dimname::SymbolOrString)

Return the length of the dimension `dimname` in the data set `ds`.
"""
function dim(v::AbstractVariable,dimname::SymbolOrString)
    if !(dimname in dimnames(v))
        error("$dimname is not among the dimensions of $(name(v))")
    end
    return dim(dataset(v),dimname)
end

function dim(ds::AbstractDataset,dimname::SymbolOrString)
    error("no dimension $dimname in $(path(ds))")
end

"""
    CommonDatamodel.defDim(ds::AbstractDataset,name::SymbolOrString,len)

Create dimension with the name `name` in the data set `ds` with the length `len`.
`len` can be `Inf` for unlimited dimensions.
"""
function defDim(ds::AbstractDataset,name::SymbolOrString,len)
    error("unimplemnted for abstract type")
end


"""
    CommonDatamodel.dims(ds::Union{AbstractDataset,AbstractVariable})

Return a dict-like of all dimensions and their corresponding length defined in the the data set `ds` (or variable).
"""
dims(ds::Union{AbstractDataset,AbstractVariable}) =
    OrderedDict((dn,dim(ds,dn)) for dn in dimnames(ds))



"""
    CommonDatamodel.show_dim(io,dim)

Print a list all dimensions (key/values pairs where key is the dimension names
and value the corresponding length) in `dim` to IO stream `io`.
The IO property `:level` is used for indentation.
"""
function show_dim(io::IO, d)
    level = get(io, :level, 0)
    indent = " " ^ level

    printstyled(io, indent, "Dimensions\n",color=section_color[])
    try
        for (dimname,dimlen) in d
            print(io,indent,"   $(dimname) = $(dimlen)\n")
        end
    catch err
        print(io, "Dimensions (file closed)")
    end
end



Base.keys(dims::Dimensions) = dimnames(dims.ds)
Base.getindex(dims::Dimensions,name) = dim(dims.ds,name)
Base.setindex!(dims::Dimensions,data,name) = defDim(dims.ds,name,data)
Base.show(io::IO,dims::Dimensions) = show_dim(io,dims)

unlimited(dims::Dimensions) = unlimited(dims.ds)


Base.length(a::Iterable) = length(keys(a))

function Base.iterate(a::Iterable, state = collect(keys(a)))
    if length(state) == 0
        return nothing
    end

    return (state[1] => a[popfirst!(state)], state)
end

function Base.get(a::Iterable, name::SymbolOrString, default)
    if haskey(a,name)
        return a[name]
    else
        return default
    end
end
