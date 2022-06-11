import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Application {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  link: string;

  @Column()
  icon: string;
}

export default Application;
