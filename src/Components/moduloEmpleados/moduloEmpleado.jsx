import React, { useState } from 'react';
//import estilo from './moduloEmpleado.module.css'

function ModuloEmpleado() {
  return (
    <div>
          <main><br></br><br></br>
              <h2><center>Datos del empleado</center></h2>
          </main>

          <div class="escontainer">
              
              <div class="registrar-usuario">
                <br></br>
                  <h2>Registro</h2>
                  <form method="POST" enctype="multipart/form-data">

                    <table class="registro-table">
                      <tr>
                          <th><label for="nro_documento">Número de documento:</label></th>
                          <td><input type="text" id="nro_documento" name="nro_documento" required/></td>

                          <th><label for="tipo_documento">Tipo de documento:</label></th>
                          <td>
                              <select id="tipo_documento" name="tipo_documento" required>
                                  <option value="CC">Cedula de ciudadanía</option>
                                  <option value="TI">Tarjeta de identidad</option>
                              </select>
                          </td>

                          <th><label for="fecha_nacimiento_empleado">fecha de nacimiento:</label></th>
                          <td><input type="date" id="fecha_nacimiento_empleado" name="fecha_nacimiento_empleado" required/></td>

                          <th><label for="fotocopia_documento">Fotocopia del documento:</label></th>
                          <td colspan="3"><input type="file" id="fotocopia_documento" name="fotocopia_documento" required/></td>
                      </tr>
                      <tr>
                          <th><label for="nombre1_empleado">Primer nombre:</label></th>
                          <td><input type="text" id="nombre1_empleado" name="nombre1_empleado" required/></td>

                          <th><label for="nombre2_empleado">Segundo nombre:</label></th>
                          <td><input type="text" id="nombre2_empleado" name="nombre2_empleado" required/></td>

                          <th><label for="apellido1_empleado">Primer apellido:</label></th>
                          <td><input type="text" id="apellido1_empleado" name="apellido1_empleado" required/></td>

                          <th><label for="apellido2_empleado">Primer apellido:</label></th>
                          <td><input type="text" id="apellido2_empleado" name="apellido2_empleado" required/></td>
                      </tr>

                      <tr>
                          <th><label for="correo">Correo:</label></th>
                          <td><input type="text" id="correo" name="correo" required/></td>
                          
                          <th><label for="telefono">Telefono:</label></th>
                          <td><input type="text" id="telefono" name="telefono" required/></td>

                          <th><label for="nit_empresa">Empresa:</label></th>
                          <td>
                              <select id="nit_empresa" name="nit_empresa" required>
                                  
                              </select>
                          </td>
                  
                          <th><label for="id_tipo_empleado">Tipo Vinculacion:</label></th>
                          <td>
                              <select id="id_tipo_empleado" name="id_tipo_empleado" required>
                                  
                              </select>
                          </td>
                      </tr>    

                      <tr>
                          <th><label for="id_cargo">Cargo:</label></th>
                          <td>
                              <select id="id_cargo" name="id_cargo" required>
                                  
                              </select>
                          </td>

                          <th><label for="fecha_contratacion">Fecha de contratacion:</label></th>
                          <td><input type="date" id="fecha_contratacion" name="fecha_contratacion" required/></td>

                          <th><label for="salario">Salario:</label></th>
                          <td><input type="text" id="salario" name="salario" required/></td>
                          
                      </tr>
                    </table>
                    <br/>
                    <button type="submit" name="accion" value="registrar">Registrar</button>
                  </form>

                  <br/>
                  <h2>Empleados Registrados</h2>
              </div>
              
              <div class="barra-table">
                  <table class="datos-table">
                  <tr>
                      <th>Número de documento</th>
                      <th>Tipo de documento</th>
                      <th>Fecha de nacimiento</th>
                      <th>Primer nombre</th>
                      <th>Segundo nombre</th>
                      <th>Primer apellido</th>
                      <th>Segundo apellido</th>
                      <th>Correo</th>
                      <th>Telefono</th>
                      <th>NIT empresa</th>
                      <th>id tipo empleado </th>
                      <th>id cargo </th>
                      <th>Fecha contratacion</th>
                      <th>Salario</th>
                      <th>Fotocopia documento</th>
                      <th>Acciones</th>
                  </tr>                  
                  </table>
              </div>
              <br/><br/><a class="imprimir" href="print.php?id=<?php echo $empleado['nro_documento']; ?>">Imprimir</a>
          </div>
    </div>
  )
}

export default ModuloEmpleado
