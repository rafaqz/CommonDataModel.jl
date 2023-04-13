"""
    CommonDatamodel.attribnames(ds::Union{AbstractDataset,AbstractVariable})

Return an iterable of all attribute names in `ds`.
"""
attribnames(ds::Union{AbstractDataset,AbstractVariable}) = ()


"""
    CommonDatamodel.attrib(ds::Union{AbstractDataset,AbstractVariable},attribname::SymbolOrString)

Return the length of the attributes `attribname` in the data set `ds`.
"""
function attrib(ds::Union{AbstractDataset,AbstractVariable},attribname::SymbolOrString)
    error("no attributes $attribname in $(path(ds))")
end

"""
    CommonDatamodel.defAttrib(ds::Union{AbstractDataset,AbstractVariable},name::SymbolOrString,data)

Create an attribute with the name `attrib` in the data set or variable `ds`.
"""
function defAttrib(ds::AbstractDataset,name::SymbolOrString,data)
    error("unimplemnted for abstract type")
end


attribs(ds::Union{AbstractDataset,AbstractVariable}) =
    OrderedDict((dn,attrib(ds,dn)) for dn in attribnames(ds))



"""
    CommonDatamodel.show_attrib(io,a)

Print a list all attributes (key/values pairs) in `a` to IO stream `io`.
The IO property `:level` is used for indentation.
"""
function show_attrib(io,a)
    level = get(io, :level, 0)
    indent = " " ^ level

    # if !isopen(ds)
    #     print(io,"closed Dataset")
    #     return
    # end

    try
        # use the same order of attributes than in the NetCDF file
        for (attname,attval) in a
            print(io,indent,@sprintf("%-20s = ",attname))
            printstyled(io, @sprintf("%s",attval),color=attribute_color[])
            print(io,"\n")
        end
    catch err
        print(io,"Dataset attributes (file closed)")
        # if isa(err,NetCDFError)
        #     if err.code == NC_EBADID
        #         print(io,"Dataset  attributes (file closed)")
        #         return
        #     end
        # end
        # rethrow()
    end
end